(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('IssueReportController', function($scope, AuthService, IssueReport, UpdateService){


      $scope.issueType = ['Download an update', 'Install an update', 'Other: See comments for details']; //TODO: programtically save and retrieve known issue types


      /****************************************************************/
                      /*Creates & emails the issue report*/
      $scope.msgStatus = 0;//Initializes message status
      $scope.report = function (issue,comments){
        var date = new Date();
        UpdateService
          .getAllCurrentUpdates()
          .then(function(currentUpdates){
            AuthService
              .getCurrent()
              .$promise
              .then(function (user){
                var update;
                var date = new Date();
                _.forEach(currentUpdates, function(o){
                  if(o.stateId == user.stateId){
                    update = o;
                  }
                });
                IssueReport
                  .create({issue: issue, createdAt:date, comments: comments, employeeId: user.id, stateId: user.stateId, groupId: user.groupId, updateId: update.id})
                  .$promise
                  .then(function(){
                    console.log("Your issue has been emailed to the support team.");
                    $scope.msgStatus = 1;
                    $scope.confirmation = "Your message has been sent."
                  });
              })
          });
      };
      /*****************************************************************/


    })
})();
