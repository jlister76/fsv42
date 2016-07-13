(function(){
  'use strict';

  angular
    .module('FSV42App')
    .factory('DownloadService', function (AuthService,Update,UpdateService){
      function getCurrentDownload(){
        var currentDownload ={};

        function download() {
          return AuthService
            .getCurrentState()
            .then(function (state) {
              console.log(state);
              return UpdateService
                .getCurrentReleaseDate()
                .then(function (date) {
                  console.log(date);
                  return Update
                    .findOne({filter: {where: {state: state, releaseDate: date}}})
                    .$promise
                    .then(function (update) {
                      currentDownload.id = update.id;
                      currentDownload.state = update.state;
                      currentDownload.link = update.link;
                      currentDownload.releaseDate = update.releaseDate;
                      console.log(currentDownload);
                      return currentDownload;
                    })
                });
            });

        }
        return download();
      }

      return {
        getCurrentDownload: getCurrentDownload
      }
    })
})();
