(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('DashboardController', function ($scope, AuthService, $rootScope, $state, $mdSidenav, $log, $mdMedia, Confirmation,uiGmapGoogleMapApi, Employee){

      $scope.updateVersion = ['5.23.2016', '6.1.2016']; //TODO: store update versions in db and return an array of versions.
      $scope.state = ["Texas", "Kentucky", "Mississippi"];

      $scope.getCurrent = function () {
        AuthService.getCurrent()
          .$promise
          .then(function (user) {
            //console.info(user);
            $rootScope.currentUser = user;

          })
          .then(function(){
            var email = localStorage.getItem("email");
            var initConfirms = function (){
              //console.log(email);
              Confirmation.find({filter: {where: {email: email}}})
                .$promise
                .then(function(confirmationList){
                  console.log(confirmationList);
                  $scope.confirms = confirmationList;
                })
            };
            initConfirms();

            $scope.findConfirms = function (updateVersion) {
              Confirmation
                .find({filter: {where: {version: updateVersion}}})
                .$promise
                .then(function(confirmation){
                  console.log(confirmation);
                  $scope.confirmations = confirmation;
                })
            };

          })

      };
      $scope.getCurrent();

      $scope.initTxData = function (version) {
        Employee
          .find()
          .$promise
          .then(function(employees){
            var txEmp = [];
            var kyEmp = [];
            var msEmp = [];

            for(var e in employees){
              if(employees[e].state == "TX"){
                txEmp.push(employees[e]);
                $scope.txEmpCount = txEmp.length;
              } else if (employees[e].state == "KY"){
                kyEmp.push(employees[e]);
                $scope.kyEmpCount = kyEmp.length;
              } else if (employees[e].state == "MS") {
                msEmp.push(employees[e]);
                $scope.msEmpCount = msEmp.length;
              }
            }
            return employees;
          })
          .then( function(employees){

              Confirmation
                .find({filter:{where:{version: version}}})
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



    })
})();
