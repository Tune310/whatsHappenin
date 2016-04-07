(function(){
  angular.module('whatsHappenin')
    .factory('userService', userService) // Activating the this service to use in my userCtrl

    userService.$inject = ['$http']

    function userService($http){ // this service is using the key/value properties from my backend and its being applied to the front end accordingly
      var userUrl = '/api/users/'
      var service = {
      index: index,
      show: show,
      create: create
      // update: update,
      // destroy: destroy
      }
      return service

      // Get All Users
      function index(){
        return $http.get(userUrl)
      }

      // Show a Specific User
      function show(id){
        return $http.get(userUrl + id)
      }

      //TODO user service
      // Create a New User After Sign Up
      function create(newUser){
        return $http.post(userUrl, newUser)
      }

      //update needs to be finished
      //destroy needs to be finished

  }
})()
