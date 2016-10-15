(function(){
	'use strict';
	var app = angular.module('ncphotoflickr');
	
	/*start search through flickr API*/
	app.factory('Flickr', ['$http','$stateParams',function(http,stateParams) {
		var Flickr = function() {
			this.items = [];
			this.busy = false;
			this.page = 1;
		};
		Flickr.prototype.nextPage = function() {
			var it = this;
			if (it.busy) return;
			it.busy = true;
			http({
				method: 'GET',
				url: 'https://api.flickr.com/services/rest',
				params: {
					method: 'flickr.photos.search',
					api_key: '39502a480a22e085c1c637732e3ba41c',
					text: stateParams.q,
					format: 'json',
					nojsoncallback: 1,
					page: it.page
				}
			}).success(function(response){
				if(it.page <= response.photos.pages){
					var result = response.photos.photo;
					for (var i = 0; i <= result.length-1; i++) {
						it.items.push(result[i]);
					}
					it.page++;
				}
				it.busy = false;
			}).error(function(error){
				console.log(error);
				it.busy = false;
			}.bind(it));
		};
		return Flickr;
	}]);
	/*end search through flickr API*/
	
	app.controller('SearchController', ['$scope','$animate','Flickr', function(scope,animate,Flickr){
		
		/*start animation of head*/
		var header = angular.element(document.querySelector('header'));
		animate.removeClass(header, 'showHead');
		animate.addClass(header, 'reduceHead');
		/*animation of head*/
		
		scope.flickr = new Flickr();
		
	}]);
}());