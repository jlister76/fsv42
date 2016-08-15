(function(){
  'use strict';

  angular
    .module('FSV42App')
    .controller('IssueReportController', function($scope, AuthService, IssueReport, UpdateService, Group){


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
                        .create({issue: issue, createdAt:date, comments: comments, employee: member.username, email: member.email, group:group[0].title, updateLink: update.link})
                        .$promise
                        .then(function(report){
                          console.log(report);
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
