(function(){
  'use strict';
  angular
    .module('logInApp')
    .controller('DownloadController', function ($scope, AuthService, $rootScope, $state, $mdSidenav, $mdMedia){

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

      $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };
      $scope.close = function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
          .then(function () {
            $log.debug("close LEFT is done");
          });
      };

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
