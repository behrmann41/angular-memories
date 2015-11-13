app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true)
  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'MemController'
    })
    .when('/years/:year', {
      templateUrl: '/partials/year.html',
      controller: 'MemController'
    })
})
