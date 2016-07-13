(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('AuthLoginController', function ($scope, $state, AuthService, $location, $log, Employee) {

      $scope.user = {
        email: null,
        password: null
      };

      $scope.login = function () {
        AuthService.login($scope.user.email, $scope.user.password)
          .then(
            function(){
              var next = $location.nextAfterLogin || '/';
              $location.nextAfterLogin = null;
              $location.path(next);
              //$state.go('dashboard');

              Employee.getCurrent()
                .$promise
                .then(function (user){

                  localStorage.setItem("email", user.email);
                  localStorage.setItem("employee_number", user.employee_number);
                  localStorage.setItem("username", user.username);
                  localStorage.setItem("fname", user.fname);
                  localStorage.setItem("lname", user.lname);
                  localStorage.setItem("stateId", user.stateId);
                  localStorage.setItem("group", user.groupId);
                  console.log(user);
                  $state.go('dashboard');
                });
            })
          .catch(function(e){
            if (e) {
              console.error(e);
              $scope.err = e;

            }
          })

      };
    })
    .controller('AuthLogoutController', function ($scope, $state, AuthService, $mdSidenav) {

     $scope.logout = function () {
        AuthService.logout()
          .then(function(){
            $mdSidenav('left').close();
            localStorage.clear();
            $state.go('login');
          });
      };


    })
    .controller('AuthSignUpController', function ($scope, $state, AuthService) {

      $scope.Employee = {
        email: 'baz@qux.com',
        password: 'bazqux'
      };

      $scope.register = function () {
        AuthService.register(email, password)
          .then(function () {
            $state.transitionTo('sign-up-success');
          });
      };
    })
})();
