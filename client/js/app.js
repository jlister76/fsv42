(function () {
  'use strict';

  angular
    .module('FSV42App',[
        'ui.router',
        'lbServices',
      'uiGmapgoogle-maps',
        'ngMaterial',
        'ngMessages',
      'chart.js'
      ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
      $stateProvider
        .state('download', {
          controller: 'DownloadController',
          url: '/download',
          templateUrl: '../downloads/download.html',
          authenticate: true
        })
        .state('dashboard', {
          controller: 'DashboardController',
          url: '/dashboard',
          templateUrl: '../dashboard/dashboard.html',
          authenticate: true,
          sticky: true
        })
        .state('report-issue', {
          controller: 'IssueReportController',
          url: '/report-issue',
          templateUrl: '../issue-reports/issue-report.html',
          authenticate: true
        })
        .state('confirm-update', {
          controller: 'ConfirmationController',
          url: '/confirm-update',
          templateUrl: '../confirms/confirm-install.html',
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
      $urlRouterProvider.otherwise('dashboard');

      $httpProvider.interceptors.push(function ($q, $location, LoopBackAuth) {
        return {
          responseError: function (rejection) {
            if (rejection.status == 401) {
              //Now clearing the loopback values from client browser for safe logout...
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              $location.nextAfterLogin = $location.path();
              $location.path('login');
            }
            return $q.reject(rejection);
          }
        };
      })
    })
    .run(function ($rootScope, $state, AuthService) {
    //prevents loading views that require authentication
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
      if (toState.authenticate && !AuthService.getCurrentId()){
        // User isn’t authenticated
        $state.transitionTo('login');
        event.preventDefault();
      }
    });
  })
    .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBUZmQ8vc34NHhjEnLzFf970bmt-0ZQaVU',
        v: '3.23', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
      });
    })

})();
