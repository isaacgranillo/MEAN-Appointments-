console.log('App.js loaded')

var appointmentsAppModule = angular.module('appointmentsApp', ['ngRoute']);

appointmentsAppModule.config(function ($routeProvider){
	$routeProvider
	.when('/appointments', {
		templateUrl: 'partials/appointments.html'
	})

	.when('/new', {
		templateUrl: 'partials/new.html'
	})

	
	.otherwise({
		redirectTo:'/appointments'
	})


})