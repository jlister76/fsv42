(function(){
  'use strict';

  angular
    .module('FSV42App')
    .factory('ConfirmationService', function(Confirmation, AuthService){
      function getCurrentConfirmation (){
        var id = AuthService.getCurrentId();
        return Confirmation
          .find({filter: {where: {employeeId: id}, include: 'update'}})
          .$promise
          .then(function(confirmations){
            var currentReleaseDate =[];
            _.forEach(confirmations, function (o){ currentReleaseDate.push(moment(o.update.releaseDate))});
              return moment.max(currentReleaseDate);
          })
      }
      
      return {
        getCurrentConfirmation: getCurrentConfirmation
      }
    })
})();
