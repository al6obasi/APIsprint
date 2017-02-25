//require the model here
var teacher = require ('./teacherModel');
module.exports ={
	getAllTeachers : function (req, res) {
		console.log(req)
	teacher.find().exec(function (err, allTeachers) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(allTeachers);
			}
		});
	},
//you have to use the teacher model to make a new database entry 
	insertTeachers : function (req, res) {
		console.log('yeaaaaa')
		var Newteachers = new teacher ({
				teacherName : req.body.teacherName,
				teacherAge : req.body.teacherAge,
				teacherPhone :req.body.teacherPhone,
				teacherAddress:req.body.teacherAddress,
				teacherLevelteach: req.body.teacherLevelteach,
		});
		Newteachers.save(function (err,newteacher) {
			console.log("newteacher")
			if (err) {
				res.status(500).res.send(err);
				console.log(err)
			}
			else{
				res.json(newteacher);
				console.log('insert teacher succefuly')
			}
			
		})
	},
//you need to use params.id to find a teacher from your database
	getTeacherById: function (req,res) {
	teacher.findOne({_id:req.params.id}).exec(function (err, teacher) {
		if(err){
			res.status(500).send('err');
		}else{
			res.status(200).send(teacher);
		}
	});
	}
	
		
}
