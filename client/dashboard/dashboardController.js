(function(){
  'use strict';

  angular
    .module('logInApp')
    .controller('DashboardController', function ($scope, AuthService, $rootScope, $state, $mdSidenav, $log, $mdMedia, Confirmation, Update, uiGmapGoogleMapApi){

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
              console.log(email);
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

      //geolocation


        function mapper(){
          uiGmapGoogleMapApi
            .then(function (maps) {

              var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 45, lng: -73},
                zoom: 15
              });
              mapInit();
            });
        };
      mapper();



      var mapInit = function (){
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 45, lng: -73},
          zoom: 15
        });
        var infoWindow = new google.maps.InfoWindow({map: map});
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
           /* navigator.geolocation.getCurrentPosition(function (position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };*/

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.'); map.setCenter(pos);
          }, function () {
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

      }

    })
})();
