(function(){
  'use strict';
  angular
    .module('FSV42App')
    .factory('DashboadService', function(AuthService,UpdateService,DownloadService,ConfirmationService, State,Group){

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


      return {
        getAllGroups:getAllGroups,
        getAllStates:getAllStates,
        getTexasGroups:getTexasGroups,
        getKentuckyGroups:getKentuckyGroups,
        getMississippiGroups:getMississippiGroups
      }
    })
})();
