(function(){
	angular.module('whatsHappenin')
		.controller('DetailController', DetailController)

	DetailController.$inject = ['userService', '$stateParams', '$state', 'auth']

	function DetailController(userService, $stateParams, $state, auth){
		var vm = this
		vm.title = "This is the DETAIL controller"


		console.log()

		userService.show($stateParams.id).success(function(results){
			vm.user = results
			console.log(vm.user)
		})

		vm.edit = function(){
			vm.editing = true
			vm.editingUser = {
				name: vm.user.name,
				email: vm.user.email
			}
		}

		vm.update = function(){
			// patch request will go here.
			userService.update($state.id, vm.editingUser).success(function(response){
				vm.editing = false
				vm.user = response.user
			})
		}
	}
})()
