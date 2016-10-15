(function(){
	'use strict';
	var app = angular.module('ncphotoflickr');
	
	app.controller('HomeController', ['$scope','$animate', function(scope,animate){
		var header = angular.element(document.querySelector('header'));
		if(header.hasClass('reduceHead')){
			animate.removeClass(header, 'reduceHead');
			animate.addClass(header, 'showHead');
		}
	}]);
}());