(function(){
  'use strict';
  angular
    .module('FSV42App')
    .controller('ConfirmationController', function ($scope, AuthService, $rootScope, $state, $http, Confirmation, UpdateService){

     /****************************************************************/
                         /*Geo Location*/
      $scope.msgStatus = 0;
      var x = angular.element( document.querySelectorAll( '#demo' ) );
      $scope.getLocation = function() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          x.html = "Geolocation is not supported by this browser.";
        }
      };
      function showPosition(position) {
        console.info(position.coords.longitude+","+position.coords.latitude);
        var html = "Latitude: " + position.coords.latitude +
          "<br>Longitude: " + position.coords.longitude;
        x.html(html);
      }
      $scope.getLocation();
      /*****************************************************************/

      /*****************************************************************/
                /*Update or Create confirmation*/

      $scope.confirm = function (){
        //submit confirmation
        UpdateService
          .getAllCurrentUpdates()
          .then(function(currentUpdates){
            AuthService
              .getCurrent()
              .$promise
              .then(function (user){
                var update;
                var date = new Date();
                _.forEach(currentUpdates, function(o){
                  if(o.stateId == user.stateId){
                    update = o;
                  }
                });
                Confirmation
                  .findOne({filter:{where: {employeeId: AuthService.getCurrentId(), updateId: update.id}}}, function(success){console.log(success)},
                    function(err){Confirmation.create({lastUpdated: date, updateId: update.id, employeeId: AuthService.getCurrentId(), groupId: user.groupId});
                      $scope.msgStatus = 1;
                      $scope.confirmation = "Your confirmation has been saved."
                    })
                  .$promise
                  .then(function(confirmation){
                    confirmation.lastUpdated = date;
                    confirmation.$save();
                    console.info(confirmation + " saved");
                    $scope.msgStatus = 1;
                    $scope.confirmation = "Your confirmation has been saved.";
                    //Code below performs a partial update.
                    //Confirmation.prototype$updateAttributes({id:confirmation.id},{lastUpdated: date});
                  });

              });

          });
      };
      /*****************************************************************/

    })
})();
