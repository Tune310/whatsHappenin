(function(){
  angular.module('whatsHappenin')
    .factory('eventService', eventService)

    eventService.$inject = ['$http']

    function eventService($http){
      var eventsUrl = '/api/events'
      var userEvents = '/api/users/'
      var service = {
        getAll: getAll,
        index: index,
        create: create
        // update: update,
        // destroy: destroy
      }
      return service

      function getAll(){
        return  $http.get(eventsUrl)
      }

      function index(id){
        return $http.get(userEvents +  id + '/events')
      }

      function create(id, newEvent){
        return $http.post(userEvents +  id + '/events/', newEvent)
      }

    }
})()
