(function(){
  'use strict';

  angular
    .module('FSV42App')
    .factory('DownloadService', function (AuthService,Update,UpdateService){
      function getCurrentDownload(){
        var currentDownload ={};
         function download(){
           return AuthService
             .getCurrent()
             .$promise
             .then(function(user){
               var currentReleaseDate = UpdateService.getCurrentReleaseDate();
               return Update
                 .findOne({where: {state: user.state,releaseDate: currentReleaseDate}})
                 .$promise
                 .then(function(update){
                   currentDownload.id = update.id;
                   currentDownload.state = update.state;
                   currentDownload.link = update.link;
                   currentDownload.releaseDate = update.releaseDate;
                   return currentDownload;
                 })
             });
         }
        return download();

      }
      return {
        getCurrentDownload: getCurrentDownload
      }
    })
})();
