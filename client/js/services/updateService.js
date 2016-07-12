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

      return {
        getCurrentReleaseDate: getCurrentReleaseDate
      }
    })
})();
