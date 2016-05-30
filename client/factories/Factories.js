Myapp.factory('userFactory', function($http, $location){
	var factory = {};
	var thisUser = null;
	var users = [];

	factory.readUsers = function(user, callback){
		var newUser = true;
		$http.get('/user').success(function(data){
			angular.forEach(data, function(regUser){
				if(user.name == regUser.name){
					console.log(user.name, "matched", regUser.name);
					newUser = false;
					thisUser = regUser
					$location.path('/dashboard');
				}
			})
			if(newUser == true){
				console.log('getting there')
				$http.post('/user', user).success(function(data){
					console.log("New User", data);
					thisUser = data;
					$location.path('/dashboard');
				})
			}
		})
		callback(thisUser);
	}
	factory.readUser = function(callback) {
		callback(thisUser);
	}
	factory.getUsers = function(callback){
		$http.get('/users').then(function(data){
			console.log(data.data)
			users = data.data;
			callback(data.data);
		})
	}

	factory.logoutUser = function(){
		thisUser = null;
		$location.path('/');
	}
	factory.viewUser = function(id, callback) {
		$http.get('/user/'+id).success(function(data) {
			callback(data);
		})
	}
	return factory
})	

	Myapp.factory('pollFactory', function($http, $location){
		var factory = {};
		var polls = [];

		factory.addPoll = function(info, callback){
			$http.post('/poll', info).success(function(data){
				polls.push(data)
				callback(polls)
				$location.path('dashboard')
			})
		}

		factory.getPolls = function(callback){
			$http.get('/polls').success(function(output){
				polls = output;
				callback(polls)
			})
		}

		factory.deletePoll = function(poll, callback){
			console.log(poll._id)
			$http.post('/polls/' + poll._id + '/delete').then(function(data){
				polls.splice(polls.indexOf(poll), 1);
				console.log(poll, "getting Factory")
				callback(polls)
			})
		}

		factory.getOnePoll = function(poll, callback){
			$http.get('/poll/'+ poll._id).success(function(data){
				console.log(data, 'poll factory data');
				callback(data[0]);
				$location.path('/poll/' + poll._id)
			})
		}

		factory.getPoll1 = function(pollId, callback){
			$http.get('/poll/' + pollId).then(function(data){
				callback(data.data);
			})
		}

		factory.vote1 = function(poll, callback){
			console.log(poll._id)
			$http.post('/vote1/' + poll._id, poll).then(function(data){
				polls[polls.indexOf(poll)] = data.data;
				callback(data.data)
			})
		}
		factory.vote2 = function(poll, callback){
			$http.post('/vote2/' + poll._id, poll).then(function(data){
				console.log(data.data)
				polls[polls.indexOf(poll)] = data.data;
				// console.log(polls, "on the way back")
				callback(data.data)
			})
		}
		factory.vote3 = function(poll, callback){
			$http.post('/vote3/' + poll._id, poll).then(function(data){
				polls[polls.indexOf(poll)] = data.data;
				callback(data.data)
			})
		}
		factory.vote4 = function(poll, callback){
			$http.post('/vote4/' + poll._id, poll).then(function(data){
				polls[polls.indexOf(poll)] = data.data;
				callback(data.data)
			})
		}


		return factory
	})

	



