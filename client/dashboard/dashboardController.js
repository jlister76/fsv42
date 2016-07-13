(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('DashboardController', function ($scope, AuthService, $rootScope, $state, $mdSidenav, $log, $mdMedia, Confirmation,Employee, Update, $http,IssueReport, DownloadService,ConfirmationService,UpdateService){
      /*****************************************************************/
              //Set current user

      AuthService.getCurrent()
        .$promise
        .then(function (user) {
          console.info(user);
          $rootScope.currentUser = user;

        });
      /*****************************************************************/
      $scope.states = ["Texas", "Kentucky", "Mississippi"];//TODO: programattically bring in all states in dashboard service
      $scope.searchcriteria = "";
      AuthService
        .getCurrentState()
        .then(function(state){console.log(state)});

      /****************************************************************/
      //Determine release dates
      Update
        .find()
        .$promise
        .then (function(updates){

          $scope.updates = _.uniqBy(updates, 'releaseDate');
          console.log($scope.updates);
        });
      /*****************************************************************/

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
              console.log(currentDownload);
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
                var groups = [];

                _.forEach(employees, function(e){
                  groups.push(e.group);
                });
                $scope.groups = _.uniq(groups);
                console.log($scope.groups);
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
                var TXGroup_1Percentage = TXGroup_1Conf.length / TXGroup_1.length * 100;
                var TXGroup_2Percentage = TXGroup_2Conf.length / TXGroup_2.length * 100;
                var KYGroup_1Percentage = KYGroup_1Conf.length / KYGroup_1.length * 100;
                var KYGroup_2Percentage = KYGroup_2Conf.length / KYGroup_2.length * 100;
                var MSGroup_1Percentage = MSGroup_1Conf.length / MSGroup_1.length * 100;
                var MSGroup_2Percentage = MSGroup_2Conf.length / MSGroup_2.length * 100;
                console.info(TXGroup_1Percentage, TXGroup_2Percentage);
                console.info(KYGroup_1Percentage, KYGroup_2Percentage);
                console.info(MSGroup_1Percentage, MSGroup_2Percentage);
                //Angular-Chart.js
                $scope.chart = 1;
                $scope.labels = ['Texas', 'Kentucky', 'Mississippi'];
                $scope.series = ['Confirmed Installs'];
                $scope.data = [[TXPercentage,KYPercentage,MSPercentage]];

                $scope.TXGroupLabels = ['CORP/IT','DAL5L'];
                $scope.TXGroupData = [[TXGroup_1Percentage,TXGroup_2Percentage]];
                $scope.KYGroupLabels = ['KY/Group_1','KY/Group_2'];
                $scope.KYGroupData = [[KYGroup_1Percentage,KYGroup_2Percentage]];
                $scope.MSGroupLabels = ['MS/Group_1','MS/Group_2'];
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
                }
                console.info(TXGroup_2);
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
