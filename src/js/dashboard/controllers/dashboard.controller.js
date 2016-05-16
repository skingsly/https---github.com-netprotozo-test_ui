(function (app) {
'use strict';
    /**
     *
     *	@module FSApp.Dashboard
     *	@summary: Dashboard controller
     *		
     **/

	app.controller('DashboardMainCtrl', function($scope, DashboardDataService) {

		$scope.recipes = [];
		DashboardDataService.getRecipes(function(isValid, response) {
			if (isValid) {
				$scope.recipes = response.recipes;
			}
		});
	});

})(angular.module('FSApp.Dashboard'));