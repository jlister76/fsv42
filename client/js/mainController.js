(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('MainController', function($scope, AuthService, $rootScope, $state, $mdSidenav, $log){

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

    })
})();
