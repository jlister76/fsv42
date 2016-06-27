(function(){
  'use strict';

  angular
    .module('logInApp')
    .controller('DashboardController', function ($scope, AuthService, $rootScope, $state, $mdSidenav, $log, $mdMedia, Confirmation){
     
      $scope.updateVersion = ['5.23.2016', '6.1.2016']; //TODO: store update versions in db and return an array of versions.
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

    })
})();
