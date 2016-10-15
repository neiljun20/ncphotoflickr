(function(){
	'use strict';
	var app = angular.module('ncphotoflickr');
	
	app.controller('SearchController', ['$scope','$animate', function(scope,animate){
		var header = angular.element(document.querySelector('header'));
		animate.removeClass(header, 'showHead');
		animate.addClass(header, 'reduceHead');
	}]);
}());