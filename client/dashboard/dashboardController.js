(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('DashboardController', function ($scope, AuthService, $rootScope, $state, $mdSidenav, $log, $mdMedia, Confirmation,uiGmapGoogleMapApi, Employee, Update){
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
              console.log(confirmationList);
              $scope.confirmationList = confirmationList;
              console.log(mostRecent);
              var ClDate = [];
              _.forEach(confirmationList, function (cl){ ClDate.push(moment(cl.update.releaseDate))});
              console.log(moment.max(ClDate));
              var maxConfDate = moment.max(ClDate);
              var statusCurrent = moment(mostRecent).isSame(maxConfDate);
              if (statusCurrent){
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
              console.log(update.link);

              $scope.mostRecentDownload = {
                id: update.id,
                state: update.state,
                link: update.link,
                releaseDate: update.releaseDate
              }
            })
        });
      /************************************************************************/


      $scope.initTxData = function (version) {
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
                      /*for (var e in employees){ combo.push(employees[e].email)}*/
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

      };


      uiGmapGoogleMapApi
        .then (function(maps){
          //$scope.map = { center: { lat: 45, lng: -73 }, zoom: 8 };
          var map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 15
          });
          var infoWindow = new google.maps.InfoWindow({map: map});

          // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              infoWindow.setPosition(pos);
              infoWindow.setContent('Location found.');
              map.setCenter(pos);
            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
          function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
              'Error: The Geolocation service failed.' :
              'Error: Your browser doesn\'t support geolocation.');
          }
      });


      //CHARTIST DEMO


      $scope.barOptions = {
        seriesBarDistance: 15
      };

      $scope.barResponsiveOptions = [
        ['screen and (min-width: 901px) and (max-width: 1024px)', {
          seriesBarDistance: 10,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value;
            }
          }
        }],
        ['screen and (max-width: 900px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];

      $scope.lineOptions = {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value;
          }
        }
      };




    })
})();
