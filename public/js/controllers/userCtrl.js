(function(){
  angular.module('whatsHappenin')
    .controller('UserController', UserController)
    // This is the controller for users in my app
    UserController.$inject = ['userService', '$state']

    function UserController(userService, $state){
      var vm = this
      vm.title = "This is the title of the UserController"
      vm.newUser = {} // this will be activated when a new user has been created

      // TODO Add More CRUD To This on the front

      userService.index().success(function(results){
        vm.users = results
        console.log(results) // if success log the results of all users in the console
      })

      vm.create = function(){
        console.log(vm.newUser)
			// run the userService create method here.
			userService.create(vm.newUser).success(function(response){
				$state.go('profile', {id: response.user._id})
			})
		}

    }
})()
