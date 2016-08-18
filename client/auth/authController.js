(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('AuthLoginController', function ($scope, $state, AuthService, $location, $log, Member, $rootScope) {

      $scope.user = {
        email: null,
        password: null
      };

      $scope.login = function () {
        AuthService.login($scope.user.email, $scope.user.password)
          .then(
            function(){

              var url = $rootScope.returnToState;
              if($rootScope.returnToState){
                $state.transitionTo(url);
              }else{
                $state.transitionTo('dashboard');
              }

              Member.getCurrent()
                .$promise
                .then(function (user){
                  //$state.go('dashboard');
                });
            })
          .catch(function(e){
            if (e) {
              console.log(e);
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
            $state.go('login');
            localStorage.clear();
          });
      };


    })
    .controller('AuthSignUpController', function ($scope, $state, AuthService) {

      $scope.Member = {
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
