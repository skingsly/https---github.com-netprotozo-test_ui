(function (app) {
'use strict';

	app.factory('RecipesResource', function ($resource) {
		return $resource('assets/recipes.json', null, {
			getRecipes : {
				method : 'GET',
				headers : {
					'Accept' : 'application/json'
				},
				isArray : false
			}
		});
	});

})(angular.module('FSApp.Shared.RESTServices'));