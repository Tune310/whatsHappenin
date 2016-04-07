(function(){
  angular.module('whatsHappenin')
    .factory('userService', userService)

    userService.$inject = ['$http']

    function userService($http){
      var userUrl = '/api/users/'
      var service = {
      index: index,
      show: show,
      create: create
      // update: update,
      // destroy: destroy
      }
      return service

      function index(){
        return $http.get(userUrl)
      }

      function show(id){
        return $http.get(userUrl + id)
      }

      function create(newUser){
        return $http.post(userUrl + newUser)
      }

      //update needs to be finished
      //destroy needs to be finished

  }
})()
