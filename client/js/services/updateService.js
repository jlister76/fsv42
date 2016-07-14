(function(){
  'use strict';

  angular
    .module('FSV42App')
    .factory('UpdateService', function (Update){

      function getCurrentReleaseDate(){
        return Update
          .find()
          .$promise
          .then(function (updates){
            var dates = [];
            _.forEach(updates, function(d){dates.push(moment(d.releaseDate))});
            return moment.max(dates);
          });

      }

      function getAllCurrentUpdates() {
        return Update
          .find()
          .$promise
          .then(function (updates) {
            var dates = [];
            _.forEach(updates, function (d) {
              dates.push(moment(d.releaseDate))
            });
            var currentReleaseDate = moment.max(dates);
            var currentUpdates = [];
            _.forEach(updates, function (o) {
              if (o.releaseDate == currentReleaseDate.toJSON()) {
                currentUpdates.push(o);
              }
            });

            return currentUpdates;

          });
      }
      return {
        getCurrentReleaseDate: getCurrentReleaseDate,
        getAllCurrentUpdates: getAllCurrentUpdates
      }
    })
})();
