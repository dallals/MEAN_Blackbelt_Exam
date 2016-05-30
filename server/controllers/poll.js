var mongoose = require('mongoose');
var poll = mongoose.model('Poll');
var user = mongoose.model('User');


module.exports = function(){
	return{

		create: function(req, res){
			console.log(req.body);
			user.findOne({_id: req.body.userId}, function(err, user){
				// console.log(user);
				var newPoll = new poll({
					question: req.body.question,
					option1: req.body.option1,
					option2: req.body.option2,
					option3: req.body.option3,
					option4: req.body.option4,
					user: user._id
				});
				newPoll.save(function(err, poll){
					console.log(newPoll, "got to Back end")
					if(err){
						console.log(err)
					}else{
						console.log(poll)
						res.json(poll)
					}
				})
			})
		},
		getPolls: function(req, res){
			poll.find({})
        .populate('user')
        .exec(function(err, polls){
				if(err){
					console.log(err);
				}else{
					res.json(polls)
				}
			})
		},
		deletePoll: function(req, res){
			poll.remove({_id: req.params.id}, function(err, data){
				if(err){
					console(err);
				}else{
					res.json(data);
				}
			})
		},

		getOne: function(req, res){
			poll.findOne({ _id: req.params.id}, function(err, data){
				if(err){
					console.log(err);
				}else{
					res.json(data);
				}
			})
		},
		vote1: function(req, res){
			console.log("getting to back end")
			poll.findOne({_id: req.params.id}, function(err, data){
				if(err){
					console.log('Couldnt find appointment')
				} else {
					var votes = req.body.vote1 + 1; 
					console.log(votes)
					data.vote1 = votes
					data.save(function(err, addVote){
						if(err){
							console.log(err);
						}else{
							res.json(addVote);
						}
					})
				}
			})
		},
		vote2: function(req, res){
			poll.findOne({_id: req.params.id}, function(err, data){
				if(err){
					console.log('Couldnt find appointment')
				} else {
					var votes = req.body.vote2 + 1; 
					console.log(votes)
					data.vote2 = votes
					data.save(function(err, addVote){
						if(err){
							console.log(err);
						}else{
							res.json(addVote);
						}
					})
				}
			})
		},
		vote3: function(req, res){
			poll.findOne({_id: req.params.id}, function(err, data){
				if(err){
					console.log('Couldnt find appointment')
				} else {
					var votes = req.body.vote3 + 1; 
					console.log(votes)
					data.vote3 = votes
					data.save(function(err, addVote){
						if(err){
							console.log(err);
						}else{
							res.json(addVote);
						}
					})
				}
			})
		},
		vote4: function(req, res){
			poll.findOne({_id: req.params.id}, function(err, data){
				if(err){
					console.log('Couldnt find appointment')
				} else {
					var votes = req.body.vote4 + 1; 
					console.log(votes)
					data.vote4 = votes
					data.save(function(err, addVote){
						if(err){
							console.log(err);
						}else{
							res.json(addVote);
						}
					})
				}
			})
		},
		getPoll1: function(req, res){
			poll.findOne({_id: req.params.id}, function(err, poll){
				if(err){
					console.log(err)
				}else{
					res.json(poll)
				}
			})
		}

	}
}();