(function(){
  'use strict';

  angular
    .module('FSV42App')
    .factory('AuthService', function (Member,Employee, $q, $rootScope, State) {
      function login(email, password) {
        return Member
          .login({email: email, password: password})
          .$promise
          .then(function (response) {

            $rootScope.currentUser = {
             id: response.user._id,
             tokenId: response._id,
             username: response.username,
             email: email
             };
          });
      }
      function logout() {
        return Member
          .logout()
          .$promise
          .then(function () {
            $rootScope.currentUser = null;

          });
      }
      function register(email, password) {
        return Member
          .create({
            email: email,
            password: password
          })
          .$promise
      }
      function getCurrent() {
        return Member
          .getCurrent()


      }
      function getCurrentEmployee() {
        return Member
          .getCurrent()
          .$promise
          .then(function(user){
            return Employee
              .find({filter:{where:{memberId: user._id}}})
              .$promise
              .then(function(employee) {
                return employee[0];})
          })


      }
      function getCurrentId() {
        return Member
          .getCurrentId()

      }
      function isAuthenticated() {
        return Member.isAuthenticated;
      }
      function getCurrentState() {
        return Member
          .getCurrent()
          .$promise
          .then(function (currentEmployee) {

            return Employee.find({filter:{where:{memberId: currentEmployee._id}}}).$promise.then(function(employee){

              var stateId = employee[0].stateId;

              return State
                .find({filter:{where:{_id:stateId}}})
                .$promise
                .then(function (state) {

                  return state;
                })
            })


          });

      }


      return {
        login: login,
        logout: logout,
        register: register,
        getCurrent: getCurrent,
        getCurrentEmployee:getCurrentEmployee,
        getCurrentId: getCurrentId,
        isAuthenticated: isAuthenticated,
        getCurrentState: getCurrentState
      };
    })
})();
