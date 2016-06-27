(function(){
  'use strict';
  angular
    .module('logInApp')
    .controller('DownloadController', function ($scope, Update){
      $scope.updateVersion = ['5.23.2016', '6.1.2016']; //TODO: store update versions in db and return an array of versions.
      $scope.states = ["Texas", "Kentucky", "Mississippi"];
      var updates = function(){
        Update
          .find()
          .$promise
          .then(function(update){
            console.info(update);
            $scope.update = update;
          })
      };
      updates();
      $scope.updateByState = function(state){

        Update
          .find({filter:{where:{state: state}}})
          .$promise
          .then(function (updates){
            console.log(updates);
            $scope.updates = updates;
          })
      }
    })
})();
