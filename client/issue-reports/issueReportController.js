(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('IssueReportController', function($scope, AuthService, IssueReport, UpdateService, Group, $http){


      $scope.issueType = ['Unable to download', 'Installation Error', 'Other: See comments for details']; //TODO: programtically save and retrieve known issue types
      $scope.OS = ['Windows 10', 'Windows 8.1', 'Windows 7'];

      /****************************************************************/
                      /*Creates & emails the issue report*/
      $scope.msgStatus = 0;//Initializes message status
      $scope.report = function (issue,comments,os){
        var date = new Date();
        UpdateService
          .getAllCurrentUpdates()
          .then(function(currentUpdates){

            AuthService
              .getCurrentEmployee()

              .then(function (user){
                console.log(user._id);
                var update;
                var date = new Date();
                _.forEach(currentUpdates, function(o){
                  if(o.stateId == user.stateId){
                    update = o;
                  }
                  console.log(update);
                });
                Group
                  .find({filter:{where:{_id: user.groupId}}})
                  .$promise
                  .then(function(group){
                  AuthService
                    .getCurrent()
                    .$promise
                    .then(function(member){
                      console.log(group[0].title, member.username);
                      IssueReport
                        .create({issue: issue, createdAt:date, comments: comments,os:os, employee: member.username, email: member.email, group:group[0].title, updateLink: update.link})
                        .$promise
                        .then(function(report){

                          var issue = {"issue": report};
                          $http.post('api/IssueReports/issueTracker', issue);
                          console.log(issue);
                          console.log("Your issue has been emailed to the support team.");
                          $scope.msgStatus = 1;
                          $scope.confirmation = "Your message has been sent."
                        });
                    });

                });

              });
          });
      };
      /*****************************************************************/


    })
})();
