(function(){
  angular.module('whatsHappenin', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

    // handle any attempts to routes other than what's listed below:
    $urlRouterProvider.otherwise('/')

    // my established routes
    $stateProvider
      .state('login', { // when state hears login do whats in the key value pair
        url: '/login', // this displays something different in the url from the SPA
        templateUrl: 'partials/login.html', // put this file in the ui-view tag in the index.html file
        controller: 'UserController as user' // this is what's controlling the current state
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'partials/signup.html',
        controller: 'UserController as user'
      })
  })
})()
