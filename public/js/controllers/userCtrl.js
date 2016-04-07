(function(){
  angular.module('whatsHappenin')
    .controller('UserController', UserController)

    UserController.$inject = ['userService', '$state']

    function UserController(userService, $state){
      var vm = this
      vm.title = "This is the title of the UserController"
      vm.newUser = {}

      userService.index().success(function(results){
        vm.users = results
        console.log(results)
      })

    }
})()
