(function(){
  'use strict';
  angular
    .module('logInApp')
    .controller('DownloadController', function ($scope, AuthService, $rootScope, $state, $http){

      //directs to log-in
      $scope.authenticated = AuthService.isAuthenticated();
      $scope.getCurrent = function () {
        AuthService.getCurrent()
          .$promise
          .then(function (user) {
            //console.info(user);
            $rootScope.currentUser = user;

          });

      };
      $scope.getCurrent();

      function GetComputerName() {
        try {
          var network = new ActiveXObject('WScript.Network');
          // Show a pop up if it works
          alert(network.computerName);
        }
        catch (e) { }
      }

      GetComputerName();

    })
})();