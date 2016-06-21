(function(){
  'use strict';

  angular
    .module('logInApp')
    .controller('DashboardController', function ($scope, AuthService, $rootScope, $state, $mdSidenav, $log, $mdMedia, Confirmation){


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
          })

      };
      $scope.getCurrent();

    })
})();
