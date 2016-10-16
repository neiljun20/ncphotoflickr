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
	app.controller('MainController', ['$scope','$state','$compile', function(scope,state,compile){
		scope.search = function(){
			if(scope.search.term){
				state.go('search',{by:scope.search.by, q: scope.search.term});	//this will go to search and add a paramter
			}
		}
		
		/*start predection text layout*/		
		scope.showPredictedText = function(){
			var	search = $('.search'),
				body = $('body'),
				searchBar = search.offset(),
				searchBarHeight = search.height(),
				searchBarWidth = search.width(),
				predictedText = '<div id="predictedText"><label>asd</label></div>';
		
			if($('div#predictedText').length == 0){ // if not exist then insert the pridected text
				$('body').append(compile(predictedText)(scope));
			}
			
			$('#predictedText').css({
				top: parseInt(searchBar.top + searchBarHeight + 10),
				left: searchBar.left,
				width: searchBarWidth
			});
		}
		
		scope.removePredictedText = function(){
			$('#predictedText').remove();
		}
		
		$(window).resize(function(){
			scope.showPredictedText();
		});
		/*end predection text layout*/
		
	}]);
	/*end main controller*/
}());