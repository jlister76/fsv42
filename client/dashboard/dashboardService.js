(function(){
  'use strict';
  angular
    .module('FSV42App')
    .factory('DashboardService', function(AuthService,Update,UpdateService,Confirmation,DownloadService,State,Group){

      function getAllGroups (){
        return Group
          .find()
          .$promise
      }
      function getAllStates(){
        return State
          .find()
          .$promise
      }
      function getTexasGroups(){
        return Group
          .find({filter:{include: ['confirmations','employees'],where:{stateId: 1}}})
          .$promise

      }
      function getKentuckyGroups(){
        return Group
          .find({filter:{include: ['confirmations','employees'],where:{stateId: 2}}})
          .$promise

      }
      function getMississippiGroups(){
        return Group
          .find({filter:{include: ['confirmations','employees'],where:{stateId: 3}}})
          .$promise

      }
      function getCurrentConfirmation (){
        return AuthService
          .getCurrentEmployee()
          .then(function(user){
            if (!user){
              console.log("Not an employee");
              return null;
            }else{
              return Confirmation
                .find({filter: {where: {employeeId: user.id}, include: 'update'}})
                .$promise
                .then(function(confirmations){

                  var currentReleaseDate =[];
                  _.forEach(confirmations, function (o){ currentReleaseDate.push(moment(o.update.releaseDate))});
                  return moment.max(currentReleaseDate);
                })
            }

          });


      }





      return {
        getAllGroups:getAllGroups,
        getAllStates:getAllStates,
        getTexasGroups:getTexasGroups,
        getKentuckyGroups:getKentuckyGroups,
        getMississippiGroups:getMississippiGroups,
        getCurrentConfirmation: getCurrentConfirmation

      }
    })
})();
