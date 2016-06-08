(function(){
  'use strict';

  angular
    .module('logInApp')
    .controller('IssueReportController', function($scope, $http, $log, IssueReport){
      //code here
      $scope.isseReport = ['Unable to download update', 'Error Message During Installation'];

    })
})();
