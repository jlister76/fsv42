(function(){
  'use strict';
  angular
    .module('FSV42App')
    .factory('DashboadService', function(UpdateService,DownloadService,ConfirmationService){

      function getCurrentStatus (){
        
      }

      return {
        getCurrentStatus:getCurrentStatus
      }
    })
})();
