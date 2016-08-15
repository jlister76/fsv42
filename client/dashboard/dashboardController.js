(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('DashboardController', function ($scope,$filter, AuthService, $rootScope, $state, $mdSidenav, $log, $mdMedia, Confirmation,Employee,Update, $http,IssueReport, DownloadService,UpdateService, DashboardService,$mdToast, Region,State,Group, Member){
      /*****************************************************************/
              //Sets current user
      AuthService.getCurrent()
        .$promise
        .then(function (user) {
          $rootScope.currentUser = user;

        });
      /*****************************************************************/
      $scope.searchcriteria = "";
      $scope.sortOption = 'lname';
      /*****************************************************************/
      function initData() {

        AuthService
          .getCurrent()
          .$promise
          .then(function (user) {

            if (user.accessLevel == 'regional') {

              Region
                .find({
                  filter: {
                    include: ['confirmations', 'employees', 'groups', 'states'],
                    where: {_id: user.regionId}
                  }
                })
                .$promise
                .then(function (region) {


                  var state;

                  if (region[0].states.length <= 1) { //WEST
                    console.log(region[0].states.length);
                    $scope.states = null;
                    State
                      .find({filter: {include: ['groups', 'confirmations', 'employees'], where: {_id: region[0].states._id}}})//TEXAS
                      .$promise
                      .then(function (state) {

                        $scope.selectedState = state[0].title;
                        $scope.statePercentage = state[0].confirmations.length / state[0].employees.length * 100;
                        var statePercentage = $scope.statePercentage.toFixed(0);

                        var el = angular.element(document.querySelector('#state-percentage'));
                        var html = '<div class="percentage-bar" style="width:' + statePercentage + '%; height:8px; background-color:rgb(243, 188, 9);"></div>';
                        el.html(html);

                        //Get State employees with group

                        Employee
                          .find({filter: {include: 'group', where: {stateId: state[0]._id}}})
                          .$promise
                          .then(function (employees) {
                            var eList = [];

                            _.forEach(employees, function (e) {
                              eList.push(e);
                            });

                            //calculate the percentages for each group
                            var groupLabels = [];
                            var groupPercentages = [];
                            var groups = [];
                            var employeesWithConfirmations = [];
                            _.forEach(state[0].groups, function (g) {
                              groups.push(g);
                              groupLabels.push(g.title);
                            });
                            console.log(state[0]._id)
                            Group.find({
                              filter: {
                                include: ['employees', 'confirmations'],
                                where: {stateId: state[0]._id}
                              }
                            })
                              .$promise
                              .then(function (groups) {

                                var groupEmployees = [];

                                function compare(a, b) {
                                  if (a._id < b._id)
                                    return -1;
                                  if (a._id > b._id)
                                    return 1;
                                  return 0;
                                }//sorts objects by id

                                _.forEach(groups.sort(compare), function (g) {
                                  var cl = g.confirmations.length;
                                  var el = g.employees.length;
                                  var percentage = cl / el * 100;
                                  groupPercentages.push(percentage);

                                });
                                _.forEach(state, function (s) {


                                  _.forEach(state[0].groups, function (group) {
                                    groups.push(group);

                                  });
                                  _.forEach(s.employees, function (e) {


                                    _.forEach(s.confirmations, function (c) {

                                      if (c.employeeId == e._id) {

                                        employeesWithConfirmations.push(e);
                                      }
                                    })
                                  });

                                });

                                var employeesWithoutConfirmations = _.differenceBy(eList.sort(compare), employeesWithConfirmations.sort(compare), '_id');
                                $scope.Unconfirmed = _.uniq(employeesWithoutConfirmations);

                                $scope.groups = _.uniqBy(groups, 'title');

                                //Angular ChartJS
                                $scope.label = groupLabels;
                                $scope.data = groupPercentages;

                                var unconfirmedMembers = [];
                                _.forEach(employeesWithoutConfirmations, function (uc) {

                                  Member
                                    .find({filter:{where:{id: uc.memberId}}})
                                    .$promise
                                    .then(function (member) {


                                      unconfirmedMembers.push(member.email);

                                      return unconfirmedMembers;

                                    })
                                    .then(function (unconfirmedMembers) {
                                      $scope.sendRegionalReminder = function ($event) {
                                        console.log("active");

                                        if (unconfirmedMembers.length > 0) {

                                          var emailList = {email: unconfirmedMembers};
                                          /*$http.post('api/Updates/sendReminder', emailList);*/
                                          console.log(emailList);
                                          $mdToast.show($mdToast.simple()
                                            .position('right')
                                            .capsule(true)
                                            .textContent("An email reminder was sent."))
                                        }
                                      };
                                    })

                                });
                              });
                          });

                      });

                  } else {
                    $scope.states = _.uniqBy(region[0].states, "title");

                    $scope.StateSelection = function (selectedState, searchCriteria) {
                      var id = selectedState;

                      State
                        .find({filter: {include: ['groups', 'confirmations', 'employees'], where: {_id: id}}})
                        .$promise
                        .then(function (state) {

                          //console.log(state);
                          $scope.selectedState = state[0].title;
                          $scope.statePercentage = state[0].confirmations.length / state[0].employees.length * 100;
                          var statePercentage = $scope.statePercentage.toFixed(0);

                          var el = angular.element(document.querySelector('#state-percentage'));
                          var html = '<div style="width:' + statePercentage + '%; height:8px; background-color:rgb(243,188,9);"></div>';
                          el.html(html);

                          //Get State employees with group

                          Employee
                            .find({filter: {include: 'group', where: {stateId: state[0]._id}}})
                            .$promise
                            .then(function (employees) {
                              var eList = [];

                              _.forEach(employees, function (e) {
                                eList.push(e);
                              });


                              //calculate the percentages for each group
                              var groupLabels = [];
                              var groupPercentages = [];
                              var groups = [];
                              var employeesWithConfirmations = [];
                              _.forEach(state[0].groups, function (g) {
                                groups.push(g);
                                groupLabels.push(g.title);
                              });

                              Group.find({
                                filter: {
                                  include: ['employees', 'confirmations'],
                                  where: {stateId: state[0]._id}
                                }
                              })
                                .$promise
                                .then(function (groups) {
                                  console.log(groups);
                                  var groupEmployees = [];

                                  function compare(a, b) {
                                    if (a._id < b._id)
                                      return -1;
                                    if (a._id > b._id)
                                      return 1;
                                    return 0;
                                  }//sorts objects by id

                                  _.forEach(groups.sort(compare), function (g) {
                                    var cl = g.confirmations.length;
                                    var el = g.employees.length;
                                    var percentage = cl / el * 100;
                                    groupPercentages.push(percentage);

                                  });
                                  _.forEach(state, function (s) {


                                    _.forEach(state[0].groups, function (group) {
                                      groups.push(group);

                                    });
                                    _.forEach(s.employees, function (e) {


                                      _.forEach(s.confirmations, function (c) {

                                        if (c.employeeId == e._id) {

                                          employeesWithConfirmations.push(e);
                                        }
                                      })
                                    });

                                  });
                                  console.log(employeesWithConfirmations);
                                  var employeesWithoutConfirmations = _.differenceBy(eList.sort(compare), employeesWithConfirmations.sort(compare), '_id');
                                  $scope.Unconfirmed = _.uniq(employeesWithoutConfirmations);


                                  $scope.groups = _.uniqBy(groups, 'title');

                                  //Angular ChartJS
                                  $scope.label = groupLabels;
                                  $scope.data = groupPercentages;

                                  var unconfirmedMembers = [];
                                  _.forEach(employeesWithoutConfirmations, function (uc) {

                                    Member
                                      .find({filter:{where:{_id: uc.memberId}}})
                                      .$promise
                                      .then(function (member) {


                                        unconfirmedMembers.push(member.email);

                                        return unconfirmedMembers;

                                      })
                                      .then(function (unconfirmedMembers) {
                                        $scope.sendRegionalReminder = function ($event) {
                                          console.log("active");

                                          if (unconfirmedMembers.length > 0) {

                                            var emailList = {email: unconfirmedMembers};
                                            /*$http.post('api/Updates/sendReminder', emailList);*/
                                            console.log(emailList);
                                            $mdToast.show($mdToast.simple()
                                              .position('right')
                                              .capsule(true)
                                              .textContent("An email reminder was sent."))
                                          }
                                        };
                                      })

                                  });
                                });

                            });
                        })
                    };//End of State Selection
                  }


                })

            } else if (user.accessLevel == 'account' || 'group') {

              /************************************************************************/

              /*Determine the most recent update, confirm user status & provide d/l link*/
              /*var mostRecent = UpdateService.getCurrentReleaseDate();*/
              UpdateService
                .getCurrentReleaseDate()
                .then(function(currentReleaseDate){
                  console.log(currentReleaseDate);
                  DashboardService
                    .getCurrentConfirmation()
                    .then(function(maxConfDate){
                      console.log(maxConfDate);
                      if (maxConfDate == null){
                        $scope.msgShow = 2;

                      }else{
                        $scope.msgShow = 1;
                        $scope.statusCurrent = moment(currentReleaseDate).isSame(maxConfDate);
                      }
                        console.log($scope.statusCurrent);

                      if ($scope.statusCurrent){

                        var el = angular.element( document.querySelector('#status'));
                        var status ='<div ng-if="statusCurrent" layout layout-align="center center" class="confirmation-icon">'+
                          '<i class="material-icons">done</i></div>&nbsp; No update available.';


                        el.html(status);


                      }else{
                        $scope.msgStatus =0;
                        DownloadService
                          .getCurrentDownload()
                          .then(function(currentDownload){
                            console.log(currentDownload);
                            var mostRecentDownload = {
                              id: currentDownload._id,
                              state: currentDownload.state,
                              link: currentDownload.link,
                              releaseDate: currentDownload.releaseDate };

                            var el = angular.element( document.querySelector('#status'));

                            var status = '<div layout="column" layout-align="center center">' +
                              '<p style="" class="md-padding md-body-1">' +
                              '<a class="md-subhead" href="'+ mostRecentDownload.link +'' +
                              ' " id="download-button" >' +
                              "DOWNLOAD" + '</a>' +
                              '<br/><br/><span class="md-caption">'+'<em>FieldSmart release '+moment(mostRecentDownload.releaseDate).format("MM/DD/YY") +' is available.</em></span><div>' +
                              '</div>';



                            el.html(status);



                          });

                      }
                    });

                });

              /************************************************************************/


              Employee
                .find({filter: {where: {memberId: user._id}}})
                .$promise
                .then(function (employee) {


                  Group
                    .find({filter: {include: ['confirmations','employees'], where: {_id: employee[0].groupId}}})
                    .$promise
                    .then(function (group) {
                      console.log(group);
                      $scope.group = group[0].title;

                      UpdateService
                        .getAllCurrentUpdates()
                        .then(function (currentUpdate) {
                          //console.log(currentUpdate);
                          var currConfirmations = [];
                          _.forEach(currentUpdate, function (u) {
                            _.forEach(group[0].confirmations, function (c) {
                              if (u._id == c.updateId) {

                                currConfirmations.push(c);
                              }
                            })
                          });

                          var groupPercentage = currConfirmations.length / group[0].employees.length * 100;
                          _.forEach(group[0].employees, function (e) {
                            _.forEach(currConfirmations, function (c) {
                              if (e._id == c.employeeId) {

                                e.status = true;

                              }
                            })
                          });
                          $scope.employees = group[0].employees;
                          var unconfirmed = [];

                          _.forEach(group[0].employees, function (e) {
                            if (e.status != true) {
                              unconfirmed.push(e);
                            }
                          });


                          $scope.gp = groupPercentage.toFixed(0);

                          var el = angular.element(document.querySelector('#group-percentage'));
                          var span = '<div style="width:' + $scope.gp +'%;background-color: rgb(243,188,9) ; height:8px;"></div>';

                          el.html(span);


                          _.forEach(unconfirmed, function (uc) {
                            Member
                              .find({filter:{where:{_id: uc.memberId}}})
                              .$promise
                              .then(function (member) {

                                var unconfirmedMembers = [];

                                unconfirmedMembers.push(member.email);
                                return unconfirmedMembers;
                              })
                              .then(function (unconfirmedMembers) {


                                $scope.sendGroupReminder = function ($event) {
                                  console.log("active");
                                  if (unconfirmedMembers.length > 0) {

                                    var emailList = {email: unconfirmedMembers};
                                    /*$http.post('api/Updates/sendReminder', emailList);*/
                                    console.log(emailList);
                                    $mdToast.show($mdToast.simple()
                                      .position('right')
                                      .capsule(true)
                                      .textContent("Group Reminder was sent."))
                                  }
                                };

                              })

                          });

                        })

                    })
                })

            }
          });
        /**********************************************************/

      }
      initData();


      /*****************************************************************/
      /*Update or Create confirmation*/

      $scope.createConfirmation = function () {
        console.log("New Confirmation");
        UpdateService
          .getAllCurrentUpdates()
          .then(function (currentUpdates) {
            console.log(currentUpdates);
            AuthService
              .getCurrentEmployee()
              .then(function (user){
                console.log(user);
                var update;
                var date = new Date();
                _.forEach(currentUpdates, function(o){
                  if(o.stateId == user.stateId){
                    update = o;
                  }
                });

                Confirmation
                  .create({lastUpdated: date, updateId: update._id, employeeId: user._id, groupId: user.groupId, stateId:user.stateId, regionId: user.regionId})
                  .$promise
                  .then(function(confirmation){
                    console.log(confirmation + " saved");
                    $scope.msgStatus = 1;
                    $state.reload();
                  });


              });

          });

      };


      /************************************************************************/
                              //Device Detector
    /*  $scope.data = deviceDetector;
      $scope.allData = JSON.stringify($scope.data, null, 2);
      $scope.deviceDetector=deviceDetector;*/
      /************************************************************************/

    })
})();
