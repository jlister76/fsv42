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
<<<<<<< HEAD
      /*****************************************************************/
=======
      /*Determine the most recent update, confirm user status & provide d/l link*/
      /*var mostRecent = UpdateService.getCurrentReleaseDate();*/


      /************************************************************************/
>>>>>>> github/master
      function initData() {

        AuthService
          .getCurrent()
          .$promise
          .then(function (user) {

            if (user.accessLevel == 'regional') {
              console.log(user.regionId);
              Region
                .find({
                  filter: {
<<<<<<< HEAD
                    include: ['confirmations', 'employees', 'groups', 'states'],
                    where: {_id: user.regionId}
=======
                    //include: ['confirmations', 'employees', 'groups', 'states'],
                    where: {uid: user.regionId}
>>>>>>> github/master
                  }
                })
                .$promise
                .then(function (region) {
                  console.log(region);
                  var state;

<<<<<<< HEAD
                  if (region[0].states.length <= 1) { //WEST
                    console.log(region[0].states);
                    State
                      .find({filter: {include: ['groups', 'confirmations', 'employees'], where: {_id: region[0].states._id}}})//TEXAS
=======

                  if (region[0].uid == "57ace44a4be7451b183b4836") { //WEST

                    State
                      .find({filter: {/*include: ['groups', 'confirmations', 'employees'],*/ where: {uid: "57ace4fb4be7451b183b4839"}}})//TEXAS
>>>>>>> github/master
                      .$promise
                      .then(function (state) {
                        console.log(state);
                        $scope.selectedState = state[0].title;
                        //Including related employees
                        Employee.find({filter:{where: {stateId: state.uid}}}).$promise.then(function(employees){
                          //Including related confirmations
                          Confirmation.find({filter:{where:{stateId: state.uid}}}).$promise.then(function(confirmations){
                            console.log(confirmations);

                            $scope.statePercentage = confirmations.length / employees.length * 100;
                            var statePercentage = $scope.statePercentage.toFixed(0);

                            var el = angular.element(document.querySelector('#state-percentage'));
                            var html = '<div class="percentage-bar" style="width:' + statePercentage + '%; height:8px; background-color:rgb(243, 188, 9);"></div>';
                            el.html(html);
                        });
                        //Including related groups
                          Group.find({filter:{where:{stateId: state.uid}}}).$promise.then(function(groups){

                            var eList = [];

                            _.forEach(employees, function (e) {
                              eList.push(e);
                            });

                            //calculate the percentages for each group
                            var groupLabels = [];
                            var groupPercentages = [];
                            var groups = [];
                            var employeesWithConfirmations = [];
                            _.forEach(groups, function (g) {
                              groups.push(g);
                              groupLabels.push(g.title);
                            });
                            console.log(state[0].uid)




                          })//Group Container



                        });


                        //Get State employees with group

                        Employee
<<<<<<< HEAD
                          .find({filter: {include: 'group', where: {stateId: state[0]._id}}})
=======
                          .find({filter: {include: 'group', where: {stateId: state[0].uid}}})
>>>>>>> github/master
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
<<<<<<< HEAD
                            console.log(state[0]._id)
                            Group.find({
                              filter: {
                                include: ['employees', 'confirmations'],
                                where: {stateId: state[0]._id}
=======
                            console.log(state[0].uid)
                            Group.find({
                              filter: {
                                include: ['employees', 'confirmations'],
                                where: {stateId: state[0].uid}
>>>>>>> github/master
                              }
                            })
                              .$promise
                              .then(function (groups) {

                                var groupEmployees = [];

                                function compare(a, b) {
<<<<<<< HEAD
                                  if (a._id < b._id)
                                    return -1;
                                  if (a._id > b._id)
=======
                                  if (a.uid < b.uid)
                                    return -1;
                                  if (a.uid > b.uid)
>>>>>>> github/master
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

<<<<<<< HEAD
                                      if (c.employeeId == e._id) {
=======
                                      if (c.employeeId == e.uid) {
>>>>>>> github/master

                                        employeesWithConfirmations.push(e);
                                      }
                                    })
                                  });

                                });

                                var employeesWithoutConfirmations = _.differenceBy(eList.sort(compare), employeesWithConfirmations.sort(compare), 'id');
                                $scope.Unconfirmed = _.uniq(employeesWithoutConfirmations);


                                $scope.groups = _.uniqBy(groups, 'title');

                                //Angular ChartJS
                                $scope.label = groupLabels;
                                $scope.data = groupPercentages;

                                var unconfirmedMembers = [];
                                _.forEach(employeesWithoutConfirmations, function (uc) {

                                  Member
<<<<<<< HEAD
                                    .find({filter:{where:{id: uc.memberId}}})
=======
                                    .find({filter:{where:{uid: uc.memberId}}})
>>>>>>> github/master
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

                  }
                  State.find({filter: {where:{regionId: region.uid}}}).$promise.then(function(states){
                    console.log(states);
                    $scope.states = states;
                  });
                  //$scope.states = region[0].states;

                  $scope.StateSelection = function (selectedState) {
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
<<<<<<< HEAD
                          .find({filter: {include: 'group', where: {stateId: state[0]._id}}})
=======
                          .find({filter: {include: 'group', where: {stateId: state[0].uid}}})
>>>>>>> github/master
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
<<<<<<< HEAD
                                where: {stateId: state[0]._id}
=======
                                where: {stateId: state[0].uid}
>>>>>>> github/master
                              }
                            })
                              .$promise
                              .then(function (groups) {

                                var groupEmployees = [];

                                function compare(a, b) {
<<<<<<< HEAD
                                  if (a._id < b._id)
                                    return -1;
                                  if (a._id > b._id)
=======
                                  if (a.uid < b.uid)
                                    return -1;
                                  if (a.uid > b.uid)
>>>>>>> github/master
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
                                    console.log(e);

                                    _.forEach(s.confirmations, function (c) {

<<<<<<< HEAD
                                      if (c.employeeId == e._id) {
                                        console.log(c.employeeId, e._id);
=======
                                      if (c.employeeId == e.uid) {
                                        console.log(c.employeeId, e.uid);
>>>>>>> github/master
                                        employeesWithConfirmations.push(e);
                                      }
                                    })
                                  });

                                });

                                var employeesWithoutConfirmations = _.differenceBy(eList.sort(compare), employeesWithConfirmations.sort(compare), 'id');
                                $scope.Unconfirmed = _.uniq(employeesWithoutConfirmations);
                                console.log($scope.Unconfirmed);

                                $scope.groups = _.uniqBy(groups, 'title');

                                //Angular ChartJS
                                $scope.label = groupLabels;
                                $scope.data = groupPercentages;

                                var unconfirmedMembers = [];
                                _.forEach(employeesWithoutConfirmations, function (uc) {

                                  Member
<<<<<<< HEAD
                                    .find({filter:{where:{_id: uc.memberId}}})
=======
                                    .find({filter:{where:{uid: uc.memberId}}})
>>>>>>> github/master
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
                })

<<<<<<< HEAD
            } else if (user.accessLevel == 'account' || 'group') {
              console.log(user._id);

              /************************************************************************/

              /*Determine the most recent update, confirm user status & provide d/l link*/
              /*var mostRecent = UpdateService.getCurrentReleaseDate();*/
              UpdateService
                .getCurrentReleaseDate()
                .then(function(currentReleaseDate){

                  DashboardService
                    .getCurrentConfirmation()
                    .then(function(maxConfDate){

                      if (maxConfDate == null){
                        $scope.msgShow = 2;

                      }else{
                        $scope.msgShow = 1;
                        $scope.statusCurrent = moment(currentReleaseDate).isSame(maxConfDate);
                      }


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
                              '<br/><span class="md-caption">'+'<em>FieldSmart release '+moment(mostRecentDownload.releaseDate).format("MM/DD/YY") +' is available.</em></span><div>' +
                              '</div>';



                            el.html(status);



                          });

                      }
                    });

                });

              /************************************************************************/


              Employee
                .find({filter: {where: {memberId: user._id}}})
=======
                })

            } else if (user.accessLevel == 'account' || 'group') {
              //Check for currently available update and provide download button
              UpdateService
                .getCurrentReleaseDate()
                .then(function(currentReleaseDate){

                  DashboardService
                    .getCurrentConfirmation()
                    .then(function(maxConfDate){

                      if (maxConfDate == null){
                        $scope.msgShow = 2;

                      }else{
                        $scope.msgShow = 1;
                        $scope.statusCurrent = moment(currentReleaseDate).isSame(maxConfDate);
                      }


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

                            var mostRecentDownload = {
                              id: currentDownload.uid,
                              state: currentDownload.state,
                              link: currentDownload.link,
                              releaseDate: currentDownload.releaseDate };

                            var el = angular.element( document.querySelector('#status'));

                            var status = '<div layout="column" layout-align="center center">' +
                              '<p style="" class="md-padding md-body-1">' +
                              '<a class="md-subhead" href="'+ mostRecentDownload.link +'' +
                              ' " id="download-button" >' +
                              "DOWNLOAD" + '</a>' +
                              '<br/><span class="md-caption">'+'<em>FieldSmart release '+moment(mostRecentDownload.releaseDate).format("MM/DD/YY") +' is available.</em></span><div>' +
                              '</div>';



                            el.html(status);



                          });

                      }
                    });

                });


              Employee
                .find({filter: {where: {memberId: user.uid}}})
>>>>>>> github/master
                .$promise
                .then(function (employee) {
                  console.log(employee[0].groupId);

                  Group
<<<<<<< HEAD
                    .find({filter: {include: ['confirmations','employees'], where: {_id: employee[0].groupId}}})
=======
                    .find({filter: {where: {uid: employee[0].groupId}}})
>>>>>>> github/master
                    .$promise
                    .then(function (group) {
                      console.log(group);
                      $scope.group = group[0].title;
                      Employee
                        .find({filter: {where: {groupId: employee[0].groupId}}})
                        .$promise
                        .then(function (employees){
                        console.log(employees);
                        Confirmation.find({filter:{where:{groupId: employee[0].groupId}}})
                          .$promise
                          .then(function(confirmations){
                            console.log(confirmations);

<<<<<<< HEAD
                      UpdateService
                        .getAllCurrentUpdates()
                        .then(function (currentUpdate) {
                          //console.log(currentUpdate);
                          var currConfirmations = [];
                          _.forEach(currentUpdate, function (u) {
                            _.forEach(group[0].confirmations, function (c) {
                              if (u._id == c.updateId) {
=======
                            UpdateService
                              .getAllCurrentUpdates()
                              .then(function (currentUpdate) {
                                console.log(currentUpdate);
                                var currConfirmations = [];
                                _.forEach(currentUpdate, function (u) {
>>>>>>> github/master

                                  _.forEach(confirmations, function (c) {

<<<<<<< HEAD
                          var groupPercentage = currConfirmations.length / group[0].employees.length * 100;
                          _.forEach(group[0].employees, function (e) {
                            _.forEach(currConfirmations, function (c) {
                              if (e._id == c.employeeId) {
=======
                                    if (u.uid == c.updateId) {
>>>>>>> github/master

                                      currConfirmations.push(c);
                                    }
                                  })
                                });

                                var groupPercentage = currConfirmations.length / employees.length * 100;
                                _.forEach(employees, function (e) {
                                  _.forEach(currConfirmations, function (c) {
                                    if (e.uid == c.employeeId) {

                                      e.status = true;

                                    }
                                  })
                                });
                                console.log(group)
                                $scope.employees = employees;
                                var unconfirmed = [];

                                _.forEach(employees, function (e) {
                                  if (e.status != true) {
                                    unconfirmed.push(e);
                                  }
                                });


                                $scope.gp = groupPercentage.toFixed(0);

                                var el = angular.element(document.querySelector('#group-percentage'));
                                var span = '<div style="width:' + $scope.gp +'%;background-color: rgb(243,188,9) ; height:8px;"></div>';

                                el.html(span);

<<<<<<< HEAD
                          _.forEach(unconfirmed, function (uc) {
                            Member
                              .find({filter:{where:{_id: uc.memberId}}})
                              .$promise
                              .then(function (member) {
=======
>>>>>>> github/master

                                _.forEach(unconfirmed, function (uc) {
                                  Member
                                    .find({filter:{where:{uid: uc.memberId}}})
                                    .$promise
                                    .then(function (member) {
                                      console.log(member);
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
                      });



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
<<<<<<< HEAD
                  .create({lastUpdated: date, updateId: update._id, employeeId: user._id, groupId: user.groupId, stateId:user.stateId, regionId: user.regionId})
=======
                  .create({lastUpdated: date, updateId: update.uid, employeeId: user.uid, groupId: user.groupId, stateId:user.stateId, regionId: user.regionId})
>>>>>>> github/master
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
