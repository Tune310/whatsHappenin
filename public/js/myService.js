(function(){
  angular.module('myApp')
    .factory('myService', myService)

    myService.$inject = ['$http']

    function myService($http){
      var service = {
        index: index,
        show: show
      }
      return service
    }
})()
