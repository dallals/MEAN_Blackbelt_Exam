var mongoose = require('mongoose');
var user = mongoose.model('User');


module.exports = function(){
	return{

		create: function(req, res) {
			var newUser = new user(req.body);
			newUser.save(function(err, data) {
				if(err){
					console.log(err)
				}
				else{
					res.json(data)
				}
			})
		},
		read: function(req, res) {
			user.find({}, function(err, data) {
				if(err){
					console.log(err)
				}
				else{
					res.json(data)
				}
			})
		},
		readOne: function(req, res) {
			user.find({ _id: req.params.id }, function(err, data) {
				if(err)
					console.log(err);
				else
					res.json(data);
			})
		},

		get: function(req, res){
			user.find({}, function(err, users){
				if(err){
					console.log(err);
				}else{
					res.json(users)
				}
			})
		}
	}
}();