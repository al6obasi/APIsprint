	//implement model here
var mongoose = require('mongoose');

var teacherSchema = new mongoose.Schema({
	teacherName : String,
	teacherAge : Number,
	teacherPhone :{type:Number, unique:true, required:true},
	teacherAddress:String,
	teacherLevelteach:{type:Number, unique:false, required:true},
});

var teacher = mongoose.model('teacher', teacherSchema);

module.exports = teacher; 