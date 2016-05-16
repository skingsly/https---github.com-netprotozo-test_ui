(function (app) {
'use strict';
    /**
     *
     *	@module: FoodSense
     *	@summary: Angular JS single page application
     *		
     **/

	app.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('home', {
			url: '^/',
			'abstract': true,
			templateUrl: 'partials/home/home-main.html',
		})
		.state('home.dashboard', {
			url: '^/dashboard',
			templateUrl: 'partials/dashboard/dashboard-main.html',
			controller: 'DashboardMainCtrl'
		});

		$urlRouterProvider.when('/', '/dashboard');
		$urlRouterProvider.when('/dashboard', '/dashboard');
		$urlRouterProvider.otherwise('/dashboard');
	});

})(angular.module('FoodSense', [
	'angularSpinner',
	'ngAnimate',
	'pasvaz.bindonce',
	'ui.bootstrap',
	'ui.router',

	'FSApp.Dashboard'
]));