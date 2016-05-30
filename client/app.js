var Myapp = angular.module('Myapp', ['ngRoute']);

(function(){
	Myapp.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: "partials/index.html",
				controller: 'userController'
			})
			.when('/dashboard', {
				templateUrl: 'partials/dashboard.html',
				controller: 'questionController'
			})
			.when('/create', {
				templateUrl: 'partials/create.html',
				controller: 'pollController'
			})
			.when('/poll/:id', {
				templateUrl: 'partials/poll.html',
				controller: 'showPollController'
			})

			// .when('/new', {
			// 	templateUrl: 'partials/new.html',
			// 	controller: 'appointmentController'			
			// })

			.otherwise({
				redirectTo: "/"
			})
	})
}()); 
