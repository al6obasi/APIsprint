var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
	studentName : String,
	studentAge : Number,
	studentPhone :{type:Number, unique:true, required:true},
	studentAddress:String,
	studentLevel:{type:Number, unique:false, required:true},
});

var student = mongoose.model('student', studentSchema);

module.exports = student; 