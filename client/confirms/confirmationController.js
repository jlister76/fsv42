(function(){
  'use strict';
  angular
    .module('FSV42App')
    .controller('ConfirmationController', function ($scope, AuthService, $rootScope, $state, $http, Confirmation,deviceDetector){

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
      //EOS
      $scope.data = deviceDetector;
      $scope.allData = JSON.stringify($scope.data, null, 2);
      $scope.deviceDetector=deviceDetector;
      $scope.updateVersion = ['5.23.2016', '6.1.2016']; //TODO: store update versions in db and return an array of versions.


      $scope.confirm = function (version){
        //submit confirmation
        console.info(version);

        var email = localStorage.getItem("email");
        var fname = localStorage.getItem("fname");
        var lname = localStorage.getItem(("lname"));
        var state = localStorage.getItem(("state"));
        var division = localStorage.getItem(("division"));
        var date = new Date();
        console.info(email);
        Confirmation
          .findOne({filter:{where: {email: email, version: version}}}, function(success){console.log(success)},
          function(err){Confirmation.create({lastUpdated: date, email: email, version: version,fname: fname, lname: lname, state: state, division: division});
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


        /*Confirmation
          .upsert({version: version ,lastUpdate:date, email: email, fname: fname, lname: lname, state: state, division: division});*/

      };


    })
})();
