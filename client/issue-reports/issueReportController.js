(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('IssueReportController', function($scope, AuthService, $rootScope, $state, IssueReport, Update){

      $scope.msgStatus = 0;
      $scope.issueType = ['Download an update', 'Install an update', 'Other: See comments for details'];


      /****************************************************************/
      //Determine release dates
      Update
        .find()
        .$promise
        .then (function(updates){
          $scope.updates = _.uniqBy(updates, 'releaseDate');
        });
      /*****************************************************************/

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
