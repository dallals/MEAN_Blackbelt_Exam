var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// to install:   npm install --save node-mongoose-validator 

validator = require('node-mongoose-validator');

var userSchema = new mongoose.Schema({
	name        :String,
	created_at  :{ type: Date, default: Date.now },
	polls  :[{ type: mongoose.Schema.ObjectId, ref: "Poll" }],
	
})

var pollSchema = new mongoose.Schema({
	question :String,
	date :String,
	option1 :String,
	vote1: {type: Number, default: 0 },
	option2 :String,
	vote2: {type: Number, default: 0 },
	option3 :String,
	vote3: {type: Number, default: 0 },
	option4 :String,
	vote4: {type: Number, default: 0 },
	user: {type: Schema.Types.ObjectId, ref: "User"},
	created_at  :{ type: Date, default: Date.now }
})

// validate examples
// userSchema.path('name').validate(validator.notEmpty(), 'Please provide a name.');
userSchema.path('name').validate(function (v) {
  return v.length > 2;
}, 'my error type'); 
// userSchema.path('name').validate(validator.$notEmpty());
// userSchema.path('name').validate(validator.$notEmpty({msg: 'Please provide a name.'}));
// pollSchema.path('question').validate(validator.$notEmpty());
// pollSchema.path('option1').validate(validator.$notEmpty());
// pollSchema.path('option2').validate(validator.$notEmpty());
// pollSchema.path('option3').validate(validator.$notEmpty());
// pollSchema.path('option4').validate(validator.$notEmpty());
pollSchema.path('question').validate(function (v) {
  return v.length > 8;
}, 'my error type'); 
pollSchema.path('option1').validate(function (v) {
  return v.length > 3;
}, 'my error type'); 
pollSchema.path('option2').validate(function (v) {
  return v.length > 3;
}, 'my error type'); 
pollSchema.path('option3').validate(function (v) {
  return v.length > 3;
}, 'my error type'); 
pollSchema.path('option4').validate(function (v) {
  return v.length > 3;
}, 'my error type');  

mongoose.model('User', userSchema);
mongoose.model('Poll', pollSchema);