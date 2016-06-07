(function () {
  'use strict';

  angular
    .module('logInApp',[
        'ui.router',
        'lbServices',
        'ngMaterial',
        'ngMessages'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
      $stateProvider
        .state('download', {
          controller: 'DownloadController',
          url: '/download',
          templateUrl: '../views/download.html',
          authenticate: true
        })
        .state('confirm-update', {
          controller: 'ConfirmationController',
          url: '/confirm-update',
          templateUrl: '../views/confirm-install.html',
          authenticate: true
        })
        .state('forbidden', {
          url: '/forbidden',
          templateUrl: '../views/forbidden.html',
          authenticate: false
        })
        .state('login', {
          url: '/login',
          templateUrl: '../views/login.html',
          controller: 'AuthLoginController',
          authenticate: false
        })
        .state('logout', {
          url: '/logout',
          controller: 'AuthLogoutController',
          authenticate: true
        });
      $urlRouterProvider.otherwise('download');

      $httpProvider.interceptors.push(function ($q, $location, LoopBackAuth) {
        return {
          responseError: function (rejection) {
            if (rejection.status == 401) {
              //Now clearing the loopback values from client browser for safe logout...
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              $location.nextAfterLogin = $location.path();
              $location.path('/login');
            }
            return $q.reject(rejection);
          }
        };
      })
    })
})();
