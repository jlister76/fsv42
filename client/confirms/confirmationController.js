(function(){
  'use strict';
  angular
    .module('logInApp')
    .controller('ConfirmationController', function ($scope, AuthService, $rootScope, $state, $http, Confirmation,deviceDetector){

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
      $scope.data = deviceDetector;
      $scope.allData = JSON.stringify($scope.data, null, 2);
      $scope.deviceDetector=deviceDetector;
      $scope.updateVer = ['5.23.2016'];

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
                    var email = localStorage.getItem("email");
                    var fname = localStorage.getItem("username");
                    var lname = null;
                    var state = "TX";
                    var division = "DIV43";
                    var date = new Date().getDate();
                    Confirmation
                      .create({lastUpdate:date, email: email, fname: fname, lname: lname, state: state, division: division})
                      .$promise
                      .then(function(){
                        $scope.confirmation = "Congratulations, your installation was successful."
                      })


                  } else{
                    $scope.confirmation = "We are unable to confirm your installation at this time. Please try re-installing or report an issue";
                  }
                  var confirmUpdate = function(os){

                  };
                }
              })
          }

        );






    })
})();
