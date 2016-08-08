(function () {
  'use strict';

  angular
    .module('FSV42App',[
        'ui.router',
        'lbServices',
        'ngMaterial',
        'ngMessages',
        'chart.js',
        'fixed.table.header',
        'angularUtils.directives.dirPagination'

      ])
    .config(function ($stateProvider, $urlRouterProvider) {
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
          authenticate: true
        })
        .state('report-issue', {
          controller: 'IssueReportController',
          url: '/report-issue',
          templateUrl: '../issue-reports/issue-report.html',
          authenticate: true
        })
        .state('success-page', {
        controller: 'DashboardController',
        url: '/installation-success',
        templateUrl: '../views/success_page.html',
        authenticate: false
      })
        .state('error-page', {
          controller: 'DashboardController',
          url: '/installation-error',
          templateUrl: '../views/error_page.html',
          authenticate: false
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

    })
    .run(function ($rootScope, $state, AuthService) {

    //prevents loading views that require authentication
    $rootScope.$on("$stateChangeStart", function(event, toState){


      if (toState.authenticate && !AuthService.getCurrentId()){
        // User isn’t authenticated
        $rootScope.returnToState = toState.name;
        $state.transitionTo('login');
        event.preventDefault();

      }
    });
  });

})();
