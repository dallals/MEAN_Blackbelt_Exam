Myapp.controller('userController', function($scope, $routeParams, userFactory, $location){

	$scope.signInUser = function(user){
			console.log("button pushed")
			userFactory.readUsers(user, function(data){	
			})
		}

		userFactory.getUsers(function(data){
			$scope.users = data;
	})
})

Myapp.controller("questionController", function($scope, $routeParams, userFactory, $location, pollFactory){
// will display all polls
	$scope.logoutUser = function(){
		console.log('logout button pushed')
		userFactory.logoutUser(function(data){
		})
	}
		userFactory.readUser(function(data){
			$scope.user = data;
	})

		userFactory.getUsers(function(data){
			$scope.users = data;
	})

		pollFactory.getPolls(function(data){
			$scope.polls = data;
	})
		$scope.deletePoll = function(poll){
			pollFactory.deletePoll(poll, function(data){
				$scope.polls = data
			})
		}

		$scope.getPoll = function(poll){
		pollFactory.getOnePoll(poll, function(data){
			$scope.poll = data
		})
	}


})

Myapp.controller("pollController", function($scope, $routeParams, userFactory, $location, pollFactory){
// will make the polls
		userFactory.readUser(function(data){
			$scope.user = data;
	})


	$scope.addPoll = function(){
		console.log('getting to controller')
		$scope.newPoll.userId = $scope.user._id;
		pollFactory.addPoll($scope.newPoll, function(data){
			$scope.polls = data
		})
	}

})


Myapp.controller("showPollController", function($scope, $routeParams, userFactory, $location, pollFactory){
//will display single poll

	pollFactory.getPoll1($routeParams.id, function(data){
		$scope.poll = data;
	})


	$scope.vote1 = function(poll){
		console.log("getting to contrioller")
		pollFactory.vote1(poll, function(data){
			$scope.poll = data
		})
	}
	$scope.vote2 = function(poll){
		pollFactory.vote2(poll, function(data){
			$scope.poll = data
		})
	}
	$scope.vote3 = function(poll){
		pollFactory.vote3(poll, function(data){
			$scope.poll = data
		})
	}	
	$scope.vote4 = function(poll){
		pollFactory.vote4(poll, function(data){
			$scope.poll = data
		})
	}
		userFactory.readUser(function(data){
			$scope.user = data;
	})


	

})