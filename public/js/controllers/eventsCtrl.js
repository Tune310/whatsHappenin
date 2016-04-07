(function(){
  angular.module('whatsHappenin')
    .controller('EventsController', EventsController)

    EventsController.$inject = ['eventService', '$state']

  function EventsController(eventService, $state) {
    console.log("EventsController created")

    var vm = this
    vm.title = "Events Controller"
    vm.addEvent = {}
    // be able to console.log all events from the backend to the front end on a page
    eventService.getAll().success(function(results){ // or should i do index here?????
      vm.events = results
      console.log(results)
		})

    // eventService.index().success(function(userResult){
    //   vm.userEvents = userResult
    //   console.log(userResult)
    // })

  }

})()
