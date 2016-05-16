(function (app) {
'use strict';

	app.service('RecipesREST', function($q, $log, RecipesResource) {
		this.getRecipes = function (onCompletion) {
			RecipesResource.getRecipes().$promise.then(function onSuccess(response){
				if (!_.isUndefined(response.recipes)) {
					onCompletion(true, response);
				} else {
					onCompletion(false);
				}
			}, function onError(errorResponse) {
				onCompletion(false);
			});
		};
	});

})(angular.module('FSApp.Shared.RESTServices'));