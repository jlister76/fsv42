(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('DashboardController', function ($scope, AuthService, $rootScope, $state, $mdSidenav, $log, $mdMedia, Confirmation,Employee,Group, Update, $http,IssueReport, DownloadService,ConfirmationService,UpdateService, DashboadService,$mdToast){
      /*****************************************************************/
              //Sets current user

      AuthService.getCurrent()
        .$promise
        .then(function (user) {
          $rootScope.currentUser = user;

        });
      /*****************************************************************/
      $scope.states = ["Texas", "Kentucky", "Mississippi"];//TODO: programattically bring in all states in dashboard service
      $scope.searchcriteria = "";

      /************************************************************************/
      $scope.sortOption = 'lname';
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

                var el = angular.element( document.querySelector('#status'));
                var status = "You are currently up to date.";
                el.html(status);


              }else{
                $scope.msgStatus =0;
                DownloadService
                  .getCurrentDownload()
                  .then(function(currentDownload){
                    var mostRecentDownload = {
                      id: currentDownload.id,
                      state: currentDownload.state,
                      link: currentDownload.link,
                      releaseDate: currentDownload.releaseDate };

                      var el = angular.element( document.querySelector('#status'));

                    var status = 'A newer update is available for download.' +
                      '<p style="margin:0 1rem;" class="md-padding md-body-1">' +
                      '<a class="md-body-1" href="'+ mostRecentDownload.link +' ">' +
                      mostRecentDownload.state+"  "+ moment(mostRecentDownload.releaseDate).format("MM/DD/YYYY")  +
                      '</a><br/><small class="md-caption"><i>Click link to download</i></small>';


                    el.html(status);



                  });

              }
            });

        });

      /************************************************************************/
      /************************************************************************/
      //Retrieving most recent update & their relative confirmations
      //Creating a list of all employees and separating into 2 list [Confirmed,Unconfirmed]
      function initData(){

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


                //Angular-Chart.js
             /**************************************************************************/
                                //Company-wide stats
                var labels =[];
                DashboadService
                  .getAllStates()
                  .then(function(states){
                    _.forEach(states, function(s){
                      labels.push(s.title);
                    });
                  });
                $scope.chart = 0;//Sets company wide chart
                $scope.labels = labels;
                $scope.data = [[TXPercentage,KYPercentage,MSPercentage]];

                /*************************************************************************/
                /*************************************************************************/
                                         //Texas Group stats
                var TXGroupLabels =[];
                var TXGroups =[];
                var TXGroupPercentages =[];
                DashboadService
                  .getTexasGroups()
                  .then(function (Texas) {
                    //console.log(Texas);
                    _.forEach(Texas.sort(compare), function(g){TXGroupLabels.push(g.title)});
                    function compare(a, b) {
                      if (a.id < b.id)
                        return -1;
                      if (a.id > b.id)
                        return 1;
                      return 0;
                    }//sorts objects by id

                    _.forEach(Texas.sort(compare), function (g) {
                      var cl = g.confirmations.length;
                      var el = g.employees.length;
                      var percentage = cl/el*100;
                      TXGroupPercentages.push(percentage);
                    });
                  });
                /*************************************************************************/
                /*************************************************************************/
                                     //Kentucky Group stats
                var KYGroupLabels =[];
                var KYGroups =[];
                var KYGroupPercentages =[];
                DashboadService
                  .getKentuckyGroups()
                  .then(function (Kentucky) {

                    _.forEach(Kentucky.sort(compare), function(g){KYGroupLabels.push(g.title)});
                    function compare(a, b) {
                      if (a.id < b.id)
                        return -1;
                      if (a.id > b.id)
                        return 1;
                      return 0;
                    }//sorts objects by id
                    _.forEach(Kentucky.sort(compare), function (g) {
                      var cl = g.confirmations.length;
                      var el = g.employees.length;
                      var percentage = cl/el*100;
                      KYGroupPercentages.push(percentage);
                    });
                  });
                /*************************************************************************/
                /*************************************************************************/
                //Mississippi Group stats
                var MSGroupLabels =[];
                var MSGroups =[];
                var MSGroupPercentages =[];
                DashboadService
                  .getMississippiGroups()
                  .then(function (Mississippi) {

                    _.forEach(Mississippi.sort(compare), function(g){MSGroupLabels.push(g.title)});
                    function compare(a, b) {
                      if (a.id < b.id)
                        return -1;
                      if (a.id > b.id)
                        return 1;
                      return 0;
                    }//sorts objects by id
                    _.forEach(Mississippi.sort(compare), function (g) {
                      var cl = g.confirmations.length;
                      var el = g.employees.length;
                      var percentage = cl/el*100;
                      MSGroupPercentages.push(percentage);
                    });
                  });
                /*************************************************************************/

                $scope.TXGroupLabels = TXGroupLabels;
                $scope.TXGroupData = [TXGroupPercentages];
                $scope.KYGroupLabels = KYGroupLabels;
                $scope.KYGroupData = [KYGroupPercentages];
                $scope.MSGroupLabels = MSGroupLabels;
                $scope.MSGroupData = [MSGroupPercentages];
                //Ensure scale 0-100
                $scope.options ={
                  scales: {
                    xAxes: [
                      {
                        id: 'x-axis-1',
                        type: 'linear',
                        beginAtZero: true,
                        ticks: {
                          min: 0,
                          max: 100
                        }
                      }
                    ]
                  }

                };

                //Sending email reminders
                $scope.sendReminder = function ($event) {
                  AuthService
                    .getCurrentState()
                    .then(function(state){
                      var emails =[];

                      _.forEach($scope.employeesWithoutConfirmations, function(employee){
                        console.log(employee, state);
                        if (employee.stateId == state.id){
                          console.log(employee.stateId, state.id);
                          emails.push(employee.email);
                        } else {
                          console.log("Everyone in "+ state.title + " is up to date.");
                          $mdToast.show($mdToast.simple()
                            .position('right')
                            .capsule(true)
                            .textContent("Everyone in "+ state.title + " is up to date."))

                        }
                      });
                      var email = {email: emails};
                      $http.post('api/Updates/sendReminder', email);
                      console.log(email);
                    });
                };
                $scope.sendEmail = function (address, $event){
                  var address = [address];
                  var email = {email: address};
                  $http.post('api/Updates/sendReminder', email);
                  console.log(email);
                  $mdToast.show($mdToast.simple()
                    .position('right')
                    .capsule(true)
                    .textContent("A reminder has been sent to " + email.email ))
                }

              })
          });
      }
      initData();
      /************************************************************************/
      $scope.chart = function (){
        $scope.isSelected = !$scope.isSelected;
      }


      /************************************************************************/
                              //Device Detector
    /*  $scope.data = deviceDetector;
      $scope.allData = JSON.stringify($scope.data, null, 2);
      $scope.deviceDetector=deviceDetector;*/
      /************************************************************************/

    })
})();
