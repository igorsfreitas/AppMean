var superhero = angular.module("superhero", []);

superhero.controller('PostCtrl', ['$scope', function($scope){
	var posts = [
		{
			title:'Publicação 1',
			content:'Conteúdo 1',
			tags:['sdaji'],
			likes:10
		},
		{
			title:'Publicação 2',
			content:'Conteúdo 2',
			tags:['sdaji'],
			likes:15
		}
	];

	$scope.posts = posts;

	//Funções

	$scope.addLike = function(post){
		post.likes += 1;
	}

	$scope.removeLike = function(post){
		post.likes -= 1;
	}

}]);