(function(){ // Iffy makes the code here anonymous in the browser console to other users
  angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', mainRouter]) //make sure to run this inside of an array in when configging I forgot

    function mainRouter($stateProvider, $urlRouterProvider) {

    //if url is invalid or does not exist re route to home
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'MainController as main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html'
      })

  }
})()
