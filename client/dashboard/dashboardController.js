(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('DashboardController', function ($scope, AuthService, $rootScope, $state, $mdSidenav, $log, $mdMedia, Confirmation,Employee, Update, $http,IssueReport){
      /*****************************************************************/
              //Set current user

      AuthService.getCurrent()
        .$promise
        .then(function (user) {
          //console.info(user);
          $rootScope.currentUser = user;

        });
      /*****************************************************************/
      $scope.state = ["Texas", "Kentucky", "Mississippi"];
      $scope.searchcriteria = "";
      /****************************************************************/
      //Determine release dates
      Update
        .find()
        .$promise
        .then (function(updates){
          $scope.updates = _.uniqBy(updates, 'releaseDate');
        });
      /*****************************************************************/

      /************************************************************************/

      /*Determine the most recent update, confirm users status & provide d/l link*/

      Update
        .find()
        .$promise
        .then(function(updates){
          var dates = [];
          _.forEach(updates, function(d){dates.push(moment(d.releaseDate))});
          var mostRecent = moment.max(dates);
          return mostRecent;
        })
        .then(function (mostRecent){
          var id = AuthService.getCurrentId();
          Confirmation.find({filter: {where: {employeeId: id}, include: 'update'}})
            .$promise
            .then(function(confirmationList){

              $scope.confirmationList = confirmationList;

              var ClDate = [];
              _.forEach(confirmationList, function (cl){ ClDate.push(moment(cl.update.releaseDate))});

              var maxConfDate = moment.max(ClDate);
              $scope.statusCurrent = moment(mostRecent).isSame(maxConfDate);
              if ($scope.statusCurrent){
                $scope.status = "You are currently up to date.";
              }else{
                $scope.status = "A newer update is available:"
                }
            });
            return mostRecent;
        })
        .then(function(mostRecent){
          var state = localStorage.getItem('state');
          Update
            .findOne({filter: {where:{state: state, releaseDate: mostRecent}}})
            .$promise
            .then(function(update){


              $scope.mostRecentDownload = {
                id: update.id,
                state: update.state,
                link: update.link,
                releaseDate: update.releaseDate
              }
            })
        });
      /************************************************************************/
      /************************************************************************/
      //Retrieving most recent update & their relative confirmations
      //Creating a list of all employees and separating into 2 list [Confirmed,Unconfirmed]
      var b;
      Update
        .find({filter:{include:'confirmations'}})
        .$promise
        .then(function(updates){
          var maxDates = [];
          var confirmations = [];
          _.forEach(updates, function(u){
            maxDates.push(moment(u.releaseDate))
          });
          $scope.maxDate = moment.max(maxDates).format();
          var updatesWithMaxDate = [];
          _.forEach(updates, function(u){
            if(moment(u.releaseDate).isSame($scope.maxDate)){
              updatesWithMaxDate.push(u);
            }});
          _.forEach(updatesWithMaxDate, function(u){
            confirmations.push(u.confirmations);
          });
          return confirmations;
        })
        .then(function(confirmations){
          Employee
            .find()
            .$promise
            .then(function(employees){
              var sortedEmployees = employees.sort();
              var employeeIdsFromConfirmation = [];
              var employeesWithConfirmations = [];
              var employeesWithoutConfirmations = [];
              var employeeIdsWithConfirmations = _.difference(confirmations,employees);
              //console.log(employeeIdsWithConfirmations);
              _.forEach(employeeIdsWithConfirmations, function(c){
                _.forEach(c, function (o) {
                  employeeIdsFromConfirmation.push({id: o.employeeId});
                });

                function compare(a,b) {
                  if (a.id < b.id)
                    return -1;
                  if (a.id > b.id)
                    return 1;
                  return 0;
                }//sorts objects by id

                //match employee ids with employeeId and return the difference
                var employeesWithoutConfirmations = _.differenceBy(employees.sort(compare),employeeIdsFromConfirmation.sort(compare), 'id');

                _.forEach(employees.sort(compare), function(e){
                  _.forEach(employeeIdsFromConfirmation.sort(compare), function(c){
                    if (c.id == e.id){employeesWithConfirmations.push(e) }
                  })
                });

                $scope.employeesWithConfirmations =_.uniq(employeesWithConfirmations);//unique values, no dupes
                $scope.employeesWithoutConfirmations = _.uniq(employeesWithoutConfirmations);//unique values, no dupes



              });

              var txEmployeeCount =[];
              var kyEmployeeCount =[];
              var msEmployeeCount =[];
              var txConfCount =[];
              var kyConfCount =[];
              var msConfCount =[];
              //console.log($scope.employeesWithConfirmations.length / employees.length *100);
              _.forEach(employees, function (e){
                if (e.state == "Texas"){
                  txEmployeeCount.push(e);
                } else if (e.state == "Kentucky"){
                  kyEmployeeCount.push(e);

                } else if (e.state == "Mississippi"){msEmployeeCount.push(e)}
              });
              _.forEach(employeesWithConfirmations, function (e){
                if (e.state == "Texas"){
                  txConfCount.push(e);
                } else if (e.state == "Kentucky"){
                  kyConfCount.push(e);
                } else if (e.state == "Mississippi"){msConfCount.push(e)}
              });
              //unique results
              var uTxConfCount = _.uniq(txConfCount);
              var uKyConfCount = _.uniq(kyConfCount);
              var uMsConfCount = _.uniq(msConfCount);

              var TXPercentage = uTxConfCount.length / txEmployeeCount.length *100;
              var KYPercentage = uKyConfCount.length / kyEmployeeCount.length *100;
              var MSPercentage = uMsConfCount.length / msEmployeeCount.length *100;
              //Angular-Chart.js
              $scope.labels = ['Texas', 'Kentucky', 'Mississippi'];
              $scope.series = ['Confirmed Installs'];
              $scope.data = [[TXPercentage,KYPercentage,MSPercentage]];

              $scope.sendReminder = function (state) {
                console.log($scope.employeesWithoutConfirmations);
                var emails =[];
                _.forEach($scope.employeesWithoutConfirmations, function(employee){
                  if (employee.state == state){
                    emails.push(employee.email);
                  }
                });
                console.log(emails);
                var email = {email: emails};
                $http.post('api/Updates/sendReminder', email);
              }

            })
        });

      /************************************************************************/

      /*$scope.initTxData = function (version) {
        Employee
          .find()
          .$promise
          .then(function(employees){
            var txEmp = [];
            var kyEmp = [];
            var msEmp = [];

            for(var e in employees){
              if(employees[e].state == "Texas"){
                txEmp.push(employees[e]);
                $scope.txEmpCount = txEmp.length;
              } else if (employees[e].state == "Kentucky"){
                kyEmp.push(employees[e]);
                $scope.kyEmpCount = kyEmp.length;
              } else if (employees[e].state == "Mississippi") {
                msEmp.push(employees[e]);
                $scope.msEmpCount = msEmp.length;
              }
            }
            return employees;
          })
          .then(function (employees){
            Update
              .find()
              .$promise
              .then(function(updates){
                var dates = [];
                var recentUpdates = [];
                var releaseDates =[];
                _.forEach(updates, function(d){dates.push(moment(d.releaseDate))});
                var mostRecent = moment.max(dates);
                var updated = _.groupBy(updates, 'releaseDate');

                console.log(updated);
              })
              .then( function(){
                console.log();
                Confirmation
                  .find()
                  .$promise
                  .then(function(confirmations){
                    var txConfirms =[];
                    var kyConfirms = [];
                    var msConfirms = [];
                    var combo =[];
                    //return all confirmed employees
                    $scope.confirmed = _.difference(confirmations,employees);
                    var confirmedList = [];
                    var unconfirmedList = [];
                    _.forEach(employees, function (o){
                      confirmedList.push({email:o.email,fname:o.fname,lname:o.lname,state:o.state});
                    });
                    _.forEach(confirmations, function (o){
                      unconfirmedList.push({email:o.email,fname:o.fname,lname:o.lname,state:o.state});
                    });
                    function compare(a,b) {
                      if (a.email < b.email)
                        return -1;
                      if (a.email > b.email)
                        return 1;
                      return 0;
                    }//sorts objects by email
                    //console.log(confirmedList, unconfirmedList);
                    //match the confirmed with unconfirmed and return the difference
                    $scope.unConfirmed = _.differenceBy(confirmedList.sort(compare),unconfirmedList.sort(compare), 'email');

                    for (var c in confirmations) {
                      combo.push({email:confirmations[c].email,fname:confirmations[c].fname,lname:confirmations[c].lname,state:confirmations[c].state});
                      /!*for (var e in employees){ combo.push(employees[e].email)}*!/
                      if (confirmations[c].state== "TX"){
                        txConfirms.push(confirmations[c]);
                        $scope.txConfirmCount = txConfirms.length;
                      }else if (confirmations[c].state== "KY"){
                        kyConfirms.push(confirmations[c]);
                        $scope.kyConfirmCount = kyConfirms.length;
                      }else if(confirmations[c].state == "MS"){
                        msConfirms.push(confirmations[c]);
                        $scope.msConfirmCount = msConfirms.length;
                      }
                    }
                  })
              })
          })

      };*///This code will eventually be removed

      //Device Detector
    /*  $scope.data = deviceDetector;
      $scope.allData = JSON.stringify($scope.data, null, 2);
      $scope.deviceDetector=deviceDetector;*/
      /************************************************************************/


    })
})();
