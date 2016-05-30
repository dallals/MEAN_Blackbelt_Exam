var user = require('./../controllers/user.js')
var poll = require('./../controllers/poll.js')


module.exports = function(app){

	app.get('/', function(req, res) {
		res.render('index');
	})

	app.get('/user', function(req, res) {		
		console.log("getting to route")
		user.read(req, res);
		
	})

	app.get('/users', function(req, res){
		user.get(req, res);
	})

	app.get('/user/:id', function(req, res){
		user.readOne(req, res);
	})

	app.post('/user', function(req, res) {
		console.log("getting to route 2")
		user.create(req, res);
	})
	app.post('/poll', function(req, res) {
		console.log("getting to Post Poll Route")
		poll.create(req, res);
	})
	app.get('/polls', function(req, res) {
		console.log("getting to Post Poll Route")
		poll.getPolls(req, res);
	})
	app.post('/polls/:id/delete', function(req, res) {
		console.log("getting to Post Poll Route")
		poll.deletePoll(req, res);
	})

	app.get('/poll/:id', function(req, res){
		poll.getOne(req, res);
	})

	app.post('/vote1/:id', function(req, res){
		console.log('getting to the update route');
		poll.vote1(req, res);
	})
	app.post('/vote2/:id', function(req, res){
		console.log('getting to the update route');
		poll.vote2(req, res);
	})
	app.post('/vote3/:id', function(req, res){
		console.log('getting to the update route');
		poll.vote3(req, res);
	})
	app.post('/vote4/:id', function(req, res){
		console.log('getting to the update route');
		poll.vote4(req, res);
	})

	app.get('/getPoll1/:id/', function(req, res){
		poll.getPoll1(req, res);
	})

};