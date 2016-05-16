(function (app) {
'use strict';
    /**
     *
     *	@directive fs-recipes-list
     *	@properties:
     *		
     **/

    app.directive('fsRecipesList', function () {
        return {
            templateUrl: 'partials/dashboard/fs-recipes-list.html'
        };
    });

})(angular.module('FSApp.Dashboard'));