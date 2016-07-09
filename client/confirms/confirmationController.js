(function(){
  'use strict';
  angular
    .module('FSV42App')
    .controller('ConfirmationController', function ($scope, AuthService, $rootScope, $state, $http, Confirmation, Update){

     $scope.msgStatus = 0;
      //Geo Location
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


      /****************************************************************/
                        //Determine release dates
      Update
        .find()
        .$promise
        .then (function(updates){
          $scope.updates = _.uniqBy(updates, 'state');
        });
      /*****************************************************************/

      /*****************************************************************/
                /*Update or Create confirmation*/

      $scope.confirm = function (updateId){
        //submit confirmation
        console.info(updateId);

        /*var email = localStorage.getItem("email");
         var fname = localStorage.getItem("fname");
         var lname = localStorage.getItem(("lname"));
         var state = localStorage.getItem(("state"));
         var division = localStorage.getItem(("division"));*/
        var date = new Date();

        Confirmation
          .findOne({filter:{where: {employeeId: AuthService.getCurrentId(), updateId: updateId}}}, function(success){console.log(success)},
            function(err){Confirmation.create({lastUpdated: date, updateId: updateId, employeeId: AuthService.getCurrentId()});
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

      };
      /*****************************************************************/




    })
})();
