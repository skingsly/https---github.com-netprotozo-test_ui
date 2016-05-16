(function (app) {
'use strict';

	app.service('DashboardDataService', function(RecipesREST) {

		this.getRecipes = function(onCompletion) {
			RecipesREST.getRecipes(function(isValid, response) {
				onCompletion(isValid, response);
			});
		}
	});

})(angular.module('FSApp.Dashboard'));