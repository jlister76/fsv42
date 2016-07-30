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
     /* $scope.states = ["Texas", "Kentucky", "Mississippi"];*///TODO: programattically bring in all states in dashboard service
      $scope.searchcriteria = "";

      /************************************************************************/
      $scope.sortOption = 'lname';
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
                var status ='&nbsp; You are currently up to date.';


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

                    var status = '<span>'+'FieldSmart release '+moment(mostRecentDownload.releaseDate).format("MM/DD/YY") +' is available.<span>' +
                      '<p style="" class="md-padding md-body-1">' +
                      '<button class="md-subhead" href="'+ mostRecentDownload.link +'' +
                      ' " id="download-button" >' +
                      "DOWNLOAD" + '</button>';



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
        /**********************************************************/
        AuthService
          .getCurrent()
          .$promise
          .then(function(user){
            if(user.accessLevel == 'regional'){

                Region
                  .find({filter:{include:['confirmations','employees','groups','states'], where:{id:user.regionId}}} )
                  .$promise
                  .then(function(region){
                    //console.log(region[0].states);
                    var state;

                    if (region[0].id == 2){

                      State
                        .find({filter: {include:['groups','confirmations','employees'], where:{id: 1}}})
                        .$promise
                        .then(function(state){

                          $scope.selectedState = state[0].title;
                          $scope.statePercentage = state[0].confirmations.length / state[0].employees.length *100;
                          var statePercentage = $scope.statePercentage.toFixed(0);

                          var el = angular.element(document.querySelector('#state-percentage'));
                          var html = '<div style="width:'+statePercentage+'%; height:6px; background-color:rgb(243,188,9);"></div>';
                          el.html(html);

                          //Get State employees with group

                          Employee
                            .find({filter:{include:'group',where:{stateId:state[0].id}}})
                            .$promise
                            .then(function(employees){
                              var eList = [];

                              _.forEach(employees, function(e){
                                eList.push(e);
                              });

                              console.log(eList.id);
                              //calculate the percentages for each group
                              var groupLabels =[];
                              var groupPercentages =[];
                              var groups = [];
                              var employeesWithConfirmations =[];
                              _.forEach(state[0].groups, function(g){groups.push(g); groupLabels.push(g.title);});

                              Group.find({filter:{include:['employees','confirmations'], where:{stateId:state[0].id}}})
                                .$promise
                                .then(function(groups){

                                  var groupEmployees =[];
                                  function compare(a, b) {
                                    if (a.id < b.id)
                                      return -1;
                                    if (a.id > b.id)
                                      return 1;
                                    return 0;
                                  }//sorts objects by id

                                  _.forEach(groups.sort(compare), function(g){
                                    var cl = g.confirmations.length;
                                    var el = g.employees.length;
                                    var percentage = cl/el*100;
                                    groupPercentages.push(percentage);

                                  });
                                  _.forEach(state, function (s) {


                                    _.forEach(state[0].groups, function(group){
                                      groups.push(group);

                                    });
                                    _.forEach(s.employees, function (e) {
                                      console.log(e);

                                      _.forEach(s.confirmations, function (c) {

                                        if (c.employeeId == e.id) {
                                          console.log(c.employeeId, e.id);
                                          employeesWithConfirmations.push(e);
                                        }
                                      })
                                    });

                                  });

                                  var employeesWithoutConfirmations = _.differenceBy(eList.sort(compare),employeesWithConfirmations.sort(compare), 'id');
                                  $scope.Unconfirmed =_.uniq(employeesWithoutConfirmations);
                                  console.log( $scope.Unconfirmed);

                                  $scope.group = _.uniqBy(groups,'title');
                                  console.log($scope.group);
                                  //Angular ChartJS
                                  $scope.label = groupLabels;
                                  $scope.data = groupPercentages;

                                });

                            });

                        });

                    }

                    $scope.states = region[0].states;

                    $scope.StateSelection = function (selectedState){
                      var id = selectedState;
                      console.log(id);
                      State
                        .find({filter:{include:['groups','confirmations','employees'],where:{id:id}}})
                        .$promise
                        .then(function(state){

                          $scope.selectedState = state[0].title;
                          $scope.statePercentage = state[0].confirmations.length / state[0].employees.length *100;
                          var statePercentage = $scope.statePercentage.toFixed(0);

                          var el = angular.element(document.querySelector('#state-percentage'));
                          var html = '<div style="width:'+statePercentage+'%; height:6px; background-color:rgb(243,188,9);"></div>';
                          el.html(html);

                          //Get State employees with group

                          Employee
                            .find({filter:{include:'group',where:{stateId:state[0].id}}})
                            .$promise
                            .then(function(employees){
                              var eList = [];

                              _.forEach(employees, function(e){
                                eList.push(e);
                              });

                              console.log(eList.id);
                              //calculate the percentages for each group
                              var groupLabels =[];
                              var groupPercentages =[];
                              var groups = [];
                              var employeesWithConfirmations =[];
                              _.forEach(state[0].groups, function(g){groups.push(g); groupLabels.push(g.title);});

                              Group.find({filter:{include:['employees','confirmations'], where:{stateId:state[0].id}}})
                                .$promise
                                .then(function(groups){

                                  var groupEmployees =[];
                                  function compare(a, b) {
                                    if (a.id < b.id)
                                      return -1;
                                    if (a.id > b.id)
                                      return 1;
                                    return 0;
                                  }//sorts objects by id

                                  _.forEach(groups.sort(compare), function(g){
                                    var cl = g.confirmations.length;
                                    var el = g.employees.length;
                                    var percentage = cl/el*100;
                                    groupPercentages.push(percentage);

                                  });
                                  _.forEach(state, function (s) {


                                    _.forEach(state[0].groups, function(group){
                                      groups.push(group);

                                    });
                                    _.forEach(s.employees, function (e) {
                                      console.log(e);

                                      _.forEach(s.confirmations, function (c) {

                                        if (c.employeeId == e.id) {
                                          console.log(c.employeeId, e.id);
                                          employeesWithConfirmations.push(e);
                                        }
                                      })
                                    });

                                  });

                                  var employeesWithoutConfirmations = _.differenceBy(eList.sort(compare),employeesWithConfirmations.sort(compare), 'id');
                                  $scope.Unconfirmed =_.uniq(employeesWithoutConfirmations);
                                  console.log( $scope.Unconfirmed);

                                  $scope.group = _.uniqBy(groups,'title');
                                  console.log($scope.group);
                                  //Angular ChartJS
                                  $scope.label = groupLabels;
                                  $scope.data = groupPercentages;

                                });

                            });
                        })
                    };//End of State Selection



                  /*_.forEach(region[0].states, function(s){

                      function compare(a,b) {
                        if (a.title < b.title)
                          return -1;
                        return 1;
                        return 0;
                      }//sorts objects by id
                      State.find({filter:{include:['confirmations','employees','groups'],where:{id:s.id}}})
                        .$promise
                        .then(function(state){
                        });
                    });*/
                })

            } else if(user.accessLevel == 'group') {
              Employee
                .find({filter: {where: {memberId: user.id}}})
                .$promise
                .then(function (employee) {
                  Group
                    .find({filter: {include: ['confirmations', 'employees'], where: {id: employee[0].groupId}}})
                    .$promise
                    .then(function (group) {
                      $scope.group = group[0].title;

                      UpdateService
                        .getAllCurrentUpdates()
                        .then(function (currentUpdate) {
                          var currConfirmations = [];
                          _.forEach(currentUpdate, function (u) {
                            _.forEach(group[0].confirmations, function (c) {
                              if (u.id == c.updateId) {
                                //console.log(c);
                                currConfirmations.push(c);
                              }
                            })
                          });
                          //console.log(currConfirmations);
                          var groupPercentage = currConfirmations.length / group[0].employees.length * 100;
                          _.forEach(group[0].employees, function (e) {
                            _.forEach(currConfirmations, function (c) {
                              if (e.id == c.employeeId) {

                                e.status = true;
                                //console.log(e);
                              }
                            })
                          });
                          $scope.employees = group[0].employees;
                          var unconfirmed = [];
                          console.log($scope.employees);
                          _.forEach(group[0].employees, function (e) {
                            if (e.status != true) {
                              unconfirmed.push(e);
                            }
                          });

                          /*var gp = $filter('number')(groupPercentage,0);*/


                          var gp = groupPercentage.toFixed(0);
                          console.log(groupPercentage);
                          var el = angular.element(document.querySelector('#inject-box-1'));
                          var span = '<div layout="row" layout-align="space-between end"><span class="md-title">' + $scope.group + ' (' + gp + '%)</span></div>' +
                            '<div layout style="margin:.1rem;"><div layout flex="100" style="background-color:rgb(0,120,215); height:6px;" id="span"><span style="width:' + groupPercentage + '%;background-color: rgb(243,188,9) ; height:6px;"></span></div></div>';

                          el.html(span);



                          _.forEach(unconfirmed, function (uc) {
                           Member
                           .findById({id: uc.memberId})
                           .$promise
                           .then(function (member) {
                           var unconfirmedMembers = [];
                           //console.log(member);
                           unconfirmedMembers.push(member.email);
                           return unconfirmedMembers;
                           })
                             .then(function (unconfirmedMembers) {


                                $scope.sendGroupReminder = function ($event) {
                                  console.log("active");
                                  if (unconfirmedMembers.length > 0) {
                                    console.log(unconfirmedMembers);
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

            }else if (user.accessLevel == 'account'){

             Employee
               .find({filter:{where:{memberId: user.id}}})
               .$promise
               .then(function(employee){
                 Group
                   .find({filter:{include:['confirmations','employees'],where:{id:employee[0].groupId}}})
                   .$promise
                   .then(function (group){
                     $scope.group = group[0].title;

                     UpdateService
                       .getAllCurrentUpdates()
                       .then(function (currentUpdate){
                         var currConfirmations = [];
                         _.forEach(currentUpdate, function(u){
                           _.forEach(group[0].confirmations, function(c){
                             if (u.id == c.updateId){
                              //console.log(c);
                               currConfirmations.push(c);
                             }
                           })
                         });
                          //console.log(currConfirmations);

                         _.forEach(group[0].employees, function(e){
                           _.forEach(currConfirmations, function(c){
                             if (e.id == c.employeeId){

                               e.status = true;
                               //console.log(e);
                             }
                           })
                         });
                         $scope.employees = group[0].employees;

                          var unconfirmed = [];

                        _.forEach(group[0].employees, function (e){
                          if ( e.status != true){
                            unconfirmed.push(e);
                          }
                        });

                         var gp =  $filter('number')($scope.groupPercentage,0);

                         $scope.groupPercentage = currConfirmations.length / group[0].employees.length *100;
                         var el = angular.element(document.querySelector('#inject-box-1'));
                         var span ='<div flex layout="row" layout-align="space-between end" ><span class="md-title">'+$scope.group+' ('+ gp +'%)</span>'+
                           '<span flex class="md-caption" style="margin:.5rem;" layout="column" layout-align="start center"></div>'+
                           '<div flex layout style="margin:.1rem;"><div layout flex="100" style="background-color:rgb(0,120,215); height:6px;" id="span"><span style="width:'+ $scope.groupPercentage+'%;background-color: rgb(243,188,9) ; height:6px;"></span></div></div>';

                         el.html(span);
                        /* _.forEach(unconfirmed, function (uc) {
                           Member
                             .findById({id: uc.memberId})
                             .$promise
                             .then(function (member) {
                               var unconfirmedMembers = [];
                               //console.log(member);
                               unconfirmedMembers.push(member.email);
                               return unconfirmedMembers;
                             })
                             .then(function (unconfirmedMembers) {


                               $scope.sendGroupReminder = function ($event) {
                                 console.log("active");
                                 if (unconfirmedMembers.length > 0) {
                                   console.log(unconfirmedMembers);
                                   var emailList = {email: unconfirmedMembers};
                                   /!*$http.post('api/Updates/sendReminder', emailList);*!/
                                   console.info(emailList);
                                   $mdToast.show($mdToast.simple()
                                     .position('right')
                                     .capsule(true)
                                     .textContent("Group Reminder was sent."))
                                 }
                               };

                             })

                         });*/

                       })

                 })
               })
            }
          });
        /**********************************************************/

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
              .find({filter:{include: ['state','group','member']}})
              .$promise
              .then(function(employees){
                var sortedEmployees = employees.sort();
                var employeeIdsFromConfirmation = [];
                var employeesWithConfirmations = [];
                var employeesWithoutConfirmations = [];
                var employeeIdsWithConfirmations = _.difference(confirmations,employees);

                _.forEach(employeeIdsWithConfirmations, function(c){
                  _.forEach(c, function (o) {
                    employeeIdsFromConfirmation.push({id: o.employeeId});
                  });

                  function compare(a,b) {
                    if (a.id < b.id)
                      return -1;
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
                DashboardService
                  .getAllStates()
                  .then(function(states){

                    _.forEach(states, function(s){
                      labels.push(s.title);
                    });
                  });
                $scope.chart = 0;//Sets company wide chart
                $scope.labels = labels;
                $scope.data = [[TXPercentage,KYPercentage,MSPercentage]];

                $scope.TXPercentage = TXPercentage;
                $scope.KYPercentage = KYPercentage;
                $scope.MSPercentage = MSPercentage;

                /*************************************************************************/
                /*************************************************************************/
                                         //Texas Group stats
                var TXGroupLabels =[];
                var TXGroupPercentages =[];
                DashboardService
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
                var KYGroupPercentages =[];
                DashboardService
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
                var MSGroupPercentages =[];
                DashboardService
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
                   },
                   default: {
                     global: {
                       responsive: true,
                       maintainAspectRatio: false
                     }
                   }

                 };


                //Sending email reminders
                $scope.sendReminder = function ($event) {
                  AuthService
                    .getCurrentState()
                    .then(function(state){

                      var emails =[];
                      _.forEach($scope.employeesWithoutConfirmations, function(employee){

                        if (employee.stateId == state.id && $scope.employeesWithoutConfirmations.length > 0){
                          console.log(employee.stateId, state.id);
                          emails.push(employee.email);
                        }
                      });
                        if (emails.length > 0){
                          var email = {email: emails};
                          $http.post('api/Updates/sendReminder', email);
                          console.log(email);
                          $mdToast.show($mdToast.simple()
                           .position('right')
                           .capsule(true)
                           .textContent("Statewide reminder was sent to: " + state.title))
                        } else {
                          console.log("email list is empty");
                          $mdToast.show($mdToast.simple()
                            .position('right')
                            .capsule(true)
                            .textContent("Everyone is " + state.title + "is up to date."));
                        }



                    });
                };
                $scope.sendEmail = function (employeeEmail, employeeState, $event){
                  AuthService
                    .getCurrentState()
                    .then(function(state){
                      var emailAddress = [];
                      var employeeList = [];

                      if (employeeState == state.id && $scope.employeesWithoutConfirmations.length > 0){
                        console.log(employeeState, state.id);

                        var email = {email: [employeeEmail]};
                        $http.post('api/Updates/sendReminder', email);
                        $mdToast.show($mdToast.simple()
                          .position('right')
                          .capsule(true)
                          .textContent("An email reminder was sent to " + employeeEmail ));
                      } else if (employeeState != state.id) {

                        $mdToast.show($mdToast.simple()
                          .position('right')
                          .capsule(true)
                          .textContent("WARNING! Email not sent. Employee does not belong to "+ state.title ))

                      }
                    });
                }
              })
          });

      }
      initData();
      /************************************************************************/
      $scope.chart = function (){
        $scope.isSelected = !$scope.isSelected;
      };
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
                  .create({lastUpdated: date, updateId: update.id, employeeId: user.id, groupId: user.groupId, stateId:user.stateId, regionId: user.regionId})
                  .$promise
                  .then(function(confirmation){
                    console.log(confirmation + " saved");
                    $scope.msgStatus = 1;
                    $state.reload();
                    /*setTimeout(function() {
                      $scope.$apply(function() {
                        //wrapped this within $apply
                        $state.reload();
                        console.log('Data has been initialized');
                      });
                    }, 1000);*/
                  });


              });

          });

      };
      /*****************************************************************/


      /************************************************************************/
                              //Device Detector
    /*  $scope.data = deviceDetector;
      $scope.allData = JSON.stringify($scope.data, null, 2);
      $scope.deviceDetector=deviceDetector;*/
      /************************************************************************/

    })
})();
