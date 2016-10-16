(function(){
	'use strict';
	var app = angular.module('ncphotoflickr', ['ui.router','ngAnimate','infinite-scroll']);
	
	/*start router*/
	app.config(['$stateProvider','$locationProvider','$urlRouterProvider',
		function(stateProvider,locationProvider,urlRouterProvider) {
			stateProvider.state('home', {
				url: '/',
				templateUrl: 'view/home.html',
				controller: 'HomeController'
			}).state('search', {
				url: '/search/:by/:q',
				templateUrl: 'view/search-list.html',
				controller: 'SearchController'
			});
			urlRouterProvider.otherwise('/');
		}
	]);
	/*end router*/
	
	/*start main controller*/
	app.controller('MainController', ['$scope','$state', function(scope,state){
		scope.search = function(){
			if(scope.search.term){
				state.go('search',{by:scope.search.by, q: scope.search.term});	//this will go to search and add a paramter
			}
		}
	}]);
	/*end main controller*/
}());