(function(){
  'use strict';
  angular
    .module('logInApp')
    .controller('ConfirmationController', function ($scope, AuthService, $rootScope, $state, $http, Confirmation,deviceDetector){
      $scope.msgStatus = 0;
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
      $scope.updateVer = ['5.23.2016']; //TODO: store update versions in db and return an array of versions.

      $scope.location = getLocation();
      $scope.confirm = function (updateVer){
        //submit confirmation

        var email = localStorage.getItem("email");
        var fname = localStorage.getItem("fname");
        var lname = localStorage.getItem(("lname"));
        var state = localStorage.getItem(("state"));
        var division = localStorage.getItem(("division"));
        var date = new Date();
        Confirmation
          .upsert({version:$scope.updateVer ,lastUpdate:date, email: email, fname: fname, lname: lname, state: state, division: division})
          .$promise
          .then(function(){
            console.log("Confirmation saved");
            $scope.msgStatus = 1;
            $scope.confirmation = "Thank you. Your insallation has been confirmed."
          });
       
      };


    })
})();
