(function(){
  'use strict';

  angular
    .module('logInApp')
    .controller('IssueReportController', function($scope, AuthService, $rootScope, $state, IssueReport){
      //Include in each controller to persist currentUser
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
      $scope.msgStatus = 0;
      $scope.issueType = ['Download an update', 'Install an update', 'Other: See comments for details'];
      $scope.updateVersion = ['5.23.2016', '6.1.2016']; //TODO: store update versions in db and return an array of versions.
      $scope.report = function (version,issue,comments){

        var email = localStorage.getItem("email");
        var fname = localStorage.getItem("fname");
        var lname = localStorage.getItem(("lname"));
        var state = localStorage.getItem(("state"));
        var division = localStorage.getItem(("division"));
        var date = new Date();
        IssueReport
          .create({issue: issue, version: version ,createdAt:date, email: email, fname: fname, lname: lname, state: state, division: division, comments: comments})
          .$promise
          .then(function(){
            console.log("Confirmation saved");
            $scope.msgStatus = 1;
            $scope.confirmation = "Your message has been sent."
          });
      }
    })
})();
