(function(){
  'use strict';

  angular
    .module('logInApp')
    .controller('IssueReportController', function($scope, AuthService, $rootScope, $state, IssueReport){
      //Include in each controller to persist currentUser
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
      $scope.issueType = ['Unable to download update', 'Error Message During Installation', 'Other: See comments for details'];

    })
})();
