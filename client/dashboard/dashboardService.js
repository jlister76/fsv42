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
        return State
          .findOne({filter:{include: 'groups',where:{title: 'Texas'}}})
          .$promise

      }
      function getKentuckyGroups(){
        return State
          .findOne({filter:{include: 'groups',where:{title: 'Kentucky'}}})
          .$promise

      }
      function getMississippiGroups(){
        return State
          .findOne({filter:{include: ['groups'],where:{title: 'Mississippi'}}})
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
