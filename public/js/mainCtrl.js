(function(){
  angular.module('myApp')
    .controller('MainController', MainController)

    function MainController(){
      var vm = this

      vm.title = "whatsHappenin"

      console.log('MainController is being used')
    }
})()
