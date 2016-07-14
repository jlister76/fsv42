(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('DashboardController', function ($scope, AuthService, $rootScope, $state, $mdSidenav, $log, $mdMedia, Confirmation,Employee,Group, Update, $http,IssueReport, DownloadService,ConfirmationService,UpdateService, DashboadService){
      /*****************************************************************/
              //Sets current user

      AuthService.getCurrent()
        .$promise
        .then(function (user) {
          $rootScope.currentUser = user;
          console.log(user);
        });
      /*****************************************************************/
      $scope.states = ["Texas", "Kentucky", "Mississippi"];//TODO: programattically bring in all states in dashboard service
      $scope.searchcriteria = "";

      /************************************************************************/

      /*Determine the most recent update, confirm user status & provide d/l link*/
      /*var mostRecent = UpdateService.getCurrentReleaseDate();*/
      UpdateService
        .getCurrentReleaseDate()
        .then(function(currentReleaseDate){
          ConfirmationService
            .getCurrentConfirmation()
            .then(function(maxConfDate){

              $scope.msgShow = 1;
              $scope.statusCurrent = moment(currentReleaseDate).isSame(maxConfDate);

              if ($scope.statusCurrent){
                $scope.status = "You are currently up to date.";
              }else{
                $scope.status = "A newer update is available for download."
              }
            });
          DownloadService
            .getCurrentDownload()
            .then(function(currentDownload){
              $scope.mostRecentDownload = {
                id: currentDownload.id,
                state: currentDownload.state,
                link: currentDownload.link,
                releaseDate: currentDownload.releaseDate
              }

            });
        });

      /************************************************************************/
      /************************************************************************/
      //Retrieving most recent update & their relative confirmations
      //Creating a list of all employees and separating into 2 list [Confirmed,Unconfirmed]
      function initData(){
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
              .find({filter:{include: ['state','group']}})
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
                var groups = [];

                _.forEach(employees, function(e){
                  groups.push(e.group.title);
                });
                $scope.groups = _.uniq(groups);
                var txEmployeeCount =[];
                var kyEmployeeCount =[];
                var msEmployeeCount =[];
                var txConfCount =[];
                var kyConfCount =[];
                var msConfCount =[];
                //console.log($scope.employeesWithConfirmations.length / employees.length *100);
                _.forEach(employees, function (e){
                  if (e.state.title == "Texas"){
                    txEmployeeCount.push(e);
                  } else if (e.state.title == "Kentucky"){
                    kyEmployeeCount.push(e);
                  } else if (e.state.title == "Mississippi"){msEmployeeCount.push(e)}
                });
                _.forEach(employeesWithConfirmations, function (e){
                  if (e.state.title == "Texas"){
                    txConfCount.push(e);
                  } else if (e.state.title == "Kentucky"){
                    kyConfCount.push(e);
                  } else if (e.state.title == "Mississippi"){msConfCount.push(e)}
                });
                //unique results
                var uTxConfCount = _.uniq(txConfCount);
                var uKyConfCount = _.uniq(kyConfCount);
                var uMsConfCount = _.uniq(msConfCount);
                var TXPercentage = uTxConfCount.length / txEmployeeCount.length *100;
                var KYPercentage = uKyConfCount.length / kyEmployeeCount.length *100;
                var MSPercentage = uMsConfCount.length / msEmployeeCount.length *100;
                var TXGroup_1 = [];
                var TXGroup_2 = [];
                var TXGroup_1Conf =[];
                var TXGroup_2Conf =[];
                var KYGroup_1 = [];
                var KYGroup_2 = [];
                var KYGroup_1Conf =[];
                var KYGroup_2Conf =[];
                var MSGroup_1 = [];
                var MSGroup_2 = [];
                var MSGroup_1Conf =[];
                var MSGroup_2Conf =[];
                _.forEach(txEmployeeCount,function(c){
                  if (c.group == 'Corporate/IT'){
                    TXGroup_1.push(c);
                  } else if (c.group == "DAL/5L") {TXGroup_2.push(c) }
                });
                _.forEach(uTxConfCount, function(c){
                  if (c.group == 'Corporate/IT'){
                    TXGroup_1Conf.push(c);
                  } else if (c.group == 'DAL/5L'){
                    TXGroup_2Conf.push(c);
                  }
                });
                _.forEach(kyEmployeeCount,function(c){
                  if (c.group == 'KY/Group_1'){
                    KYGroup_1.push(c);
                  } else if (c.group == "KY/Group_2") {KYGroup_2.push(c) }
                });
                _.forEach(uKyConfCount, function(c){
                  if (c.group == 'KY/Group_1'){
                    KYGroup_1Conf.push(c);
                  } else if (c.group == 'KY/Group_2'){
                    KYGroup_2Conf.push(c);
                  }
                });
                _.forEach(msEmployeeCount,function(c){
                  if (c.group == 'MS/Group_1'){
                    MSGroup_1.push(c);
                  } else if (c.group == "MS/Group_2") {MSGroup_2.push(c) }
                });
                _.forEach(uMsConfCount, function(c){
                  if (c.group == 'MS/Group_1'){
                    MSGroup_1Conf.push(c);
                  } else if (c.group == 'MS/Group_2'){
                    MSGroup_2Conf.push(c);
                  }
                });


                /*******************************************************************************/
                            //This won't work

                var TXGroup_1Percentage = TXGroup_1Conf.length / TXGroup_1.length * 100;
                var TXGroup_2Percentage = TXGroup_2Conf.length / TXGroup_2.length * 100;
                var KYGroup_1Percentage = KYGroup_1Conf.length / KYGroup_1.length * 100;
                var KYGroup_2Percentage = KYGroup_2Conf.length / KYGroup_2.length * 100;
                var MSGroup_1Percentage = MSGroup_1Conf.length / MSGroup_1.length * 100;
                var MSGroup_2Percentage = MSGroup_2Conf.length / MSGroup_2.length * 100;
                console.info(TXGroup_1Percentage, TXGroup_2Percentage);
                console.info(KYGroup_1Percentage, KYGroup_2Percentage);
                console.info(MSGroup_1Percentage, MSGroup_2Percentage);
                /*******************************************************************************/

                //Angular-Chart.js
                var labels =[];
                DashboadService
                  .getAllStates()
                  .then(function(states){
                    _.forEach(states, function(s){
                      labels.push(s.title);
                    });
                   });
                $scope.chart = 1;
                $scope.labels = labels;
                $scope.data = [[TXPercentage,KYPercentage,MSPercentage]];

                var TXGroupLabels =[];
                var TXGroups =[];
                DashboadService
                  .getTexasGroups()
                  .then(function (Texas) {
                    _.forEach(Texas.groups, function (g) {
                      TXGroupLabels.push(g.title);
                      TXGroups.push(g);
                    });
                    function compare(a, b) {
                      if (a.id < b.id)
                        return -1;
                      if (a.id > b.id)
                        return 1;
                      return 0;
                    }//sorts objects by id
                    _.forEach(TXGroups.sort(compare), function (g) {
                      Group
                        .findOne({filter: {include: ['confirmations', 'employees'], where: {id: g.id}}})
                        .$promise
                        .then(function (group) {
                          var groupConfCount = [];
                          var groupEmployeeCount = [];
                          _.forEach(group.confirmations, function (g) {
                            console.log(typeof(g), g);
                            if (g == NaN){
                              groupConfCount.push(1);
                            }else{
                              groupConfCount.push(g);
                            }
                          });
                          _.forEach(group.employees, function (g) {
                            //console.log(g);
                            if (g == NaN) {
                              groupEmployeeCount.push(1);
                            }else{
                              groupEmployeeCount.push(g);
                            }
                          });

                          return groups = {
                            confCount: groupConfCount.length,
                            employeeCount: groupEmployeeCount.length
                          };
                        })
                        .then(function (groups) {
                          //console.log(groups.confCount, groups.employeeCount);
                          var TXGroupsPercentage =  groups.confCount/groups.employeeCount*100;
                          $scope.TXGroupData = [TXGroupsPercentage];

                        })

                    });
                  });

                var KYGroupLabels = [];
                var KYGroups =[];
                DashboadService
                  .getKentuckyGroups()
                  .then(function(Kentucky){
                    _.forEach(Kentucky.groups, function(g){
                     KYGroupLabels.push(g.title);
                      KYGroups.push(g);
                    });
                    function compare(a, b) {
                      if (a.id < b.id)
                        return -1;
                      if (a.id > b.id)
                        return 1;
                      return 0;
                    }//sorts objects by id
                    _.forEach(KYGroups.sort(compare), function (g) {
                      Group
                        .findOne({filter: {include: ['confirmations', 'employees'], where: {id: g.id}}})
                        .$promise
                        .then(function (group) {
                          var groupConfCount = [];
                          var groupEmployeeCount = [];
                          _.forEach(group.confirmations, function (g) {
                            groupConfCount.push(g);
                          });
                          _.forEach(group.employees, function (g) {
                            console.log(g);
                            groupEmployeeCount.push(g);
                          });

                          return groups = {
                            confCount: groupConfCount.length,
                            employeeCount: groupEmployeeCount.length
                          };
                        })
                        .then(function (groups) {
                          console.log(groups.confCount, groups.employeeCount);

                        })

                    });
                   });


                var MSGroupLabels = [];
                DashboadService
                  .getMississippiGroups()
                  .then(function(Mississippi){

                    _.forEach(Mississippi.groups, function(g){
                      MSGroupLabels.push(g.title);
                    });

                  });

                $scope.TXGroupLabels = TXGroupLabels;
                /*$scope.TXGroupData = [[TXGroup_1Percentage,TXGroup_2Percentage]];*/
                $scope.KYGroupLabels = KYGroupLabels;
                $scope.KYGroupData = [[KYGroup_1Percentage,KYGroup_2Percentage]];
                $scope.MSGroupLabels = MSGroupLabels;
                $scope.MSGroupData = [[MSGroup_1Percentage,MSGroup_2Percentage]];
                //Sending email reminders
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
                };

              })
          });
      }
      initData();
      /************************************************************************/

      /************************************************************************/
                              //Device Detector
    /*  $scope.data = deviceDetector;
      $scope.allData = JSON.stringify($scope.data, null, 2);
      $scope.deviceDetector=deviceDetector;*/
      /************************************************************************/


    })
})();
