var app = angular.module('app', []);

app.controller("mainController",['$scope','$http',function($scope,$http){

$http.get('http://api-nghyf.rhcloud.com/animals/all')
	.success(function(result){
		$scope.animals = result;
	})
	.error(function(data,status){
		console.log(data);
	})

}]);

app.directive('animalCard',animalCard);