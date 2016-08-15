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
              return UpdateService
                .getCurrentReleaseDate()
                .then(function (date) {
                  return Update
                    .findOne({filter: {where: {stateId: state[0]._id, releaseDate: moment(date)}}})
                    .$promise
                    .then(function (update) {
                      console.log(update);
                      currentDownload._id = update._id;
                      currentDownload.state = state.title;
                      currentDownload.link = update.link;
                      currentDownload.releaseDate = update.releaseDate;
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
