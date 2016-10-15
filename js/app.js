(function(){
	'use strict';
	var app = angular.module('ncphotoflickr', ['ui.router','ngAnimate','infinite-scroll']);
	
	/*start router*/
	app.config(['$stateProvider','$locationProvider','$urlRouterProvider',
		function(stateProvider,locationProvider,urlRouterProvider) {
			stateProvider.state('search', {
				url: '/search',
				templateUrl: 'view/image-list.html',
				controller: 'SearchController'
			});
			urlRouterProvider.otherwise('/');
		}
	]);
	/*end router*/
	
	/*start main controller*/
	app.controller('MainController', ['$scope', function(scope){
		
	}]);
	/*end main controller*/
}());