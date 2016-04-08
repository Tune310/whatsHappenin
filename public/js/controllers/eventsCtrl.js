(function(){
  angular.module('whatsHappenin')
    .controller('EventsController', EventsController)

    EventsController.$inject = ['eventService', '$state', 'auth']

  function EventsController(eventService, $state, auth) {
    console.log("EventsController created")

    var vm = this
    vm.title = "Events Controller"
    vm.newEvent = {}
    // be able to console.log all events from the backend to the front end on a page
    eventService.getAll().success(function(results){ // or should i do index here?????
      vm.events = results
      console.log(results)
		})

    // eventService.index().success(function(userResult){
    //   vm.userEvents = userResult
    //   console.log(userResult)
    // })

    vm.createEvent = function(){
      console.log(auth.currentUser().id);
      eventService.create(auth.currentUser().id,vm.newEvent).success(function(response){
        console.log(response) //TODO fix this for all users
        // $state.post('profile', vm.newEvent) //TODO no idea if this works
      })
    }
  }

})()
