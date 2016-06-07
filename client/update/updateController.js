(function(){
  'use strict';
  angular
    .module('logInApp')
    .controller('UpdateController', function ($scope, AuthService, $rootScope, $state, $http){

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

      //Get OS data from user
      $http.get('api/employees/os')
        .success(function(os){$scope.os = os.OSystem; console.log($scope.os)})
        .then(function(){
          console.info($scope.os.host);
          //confirmUpdate($scope.os.host);
        } )
        .then(
          function(){
            console.info($scope.os.host);
            $http.get('api/employees/dir').success(function(f){$scope.files = f.Dirs; console.info($scope.files)})
              .then(function (files){
                for (var i =0; i < $scope.files.length; i++) {
                  console.log ($scope.files[i]);
                  if ($scope.files[i] == $scope.os.host+".json")
                  {
                    $scope.confirmation = "Congratulations, your installation is successful.";
                  } else{
                    $scope.confirmation = "We are unable to confirm your installation at this time.";
                  }
                  var confirmUpdate = function(os){

                  };
                }
              })
          }

        );






    })
})();
