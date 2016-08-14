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
          .find({filter:{include: ['confirmations','employees'],where:{stateId: "57a98d9eee0c73153cc340d2"}}})
          .$promise

      }
      function getKentuckyGroups(){
        return Group
          .find({filter:{include: ['confirmations','employees'],where:{stateId: "57a98dcbee0c73153cc340d3"}}})
          .$promise

      }
      function getMississippiGroups(){
        return Group
          .find({filter:{include: ['confirmations','employees'],where:{stateId: "57a98ddbee0c73153cc340d4"}}})
          .$promise

      }
      function getCurrentConfirmation (){
        return AuthService
          .getCurrentEmployee()
          .then(function(user){
            if (!user){
              return null;
            }else{
              return Confirmation
                .find({filter: {where: {employeeId: user._id}, include: 'update'}})
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
