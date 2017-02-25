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
		for (var i = 0; i < req.body.length; i++) {
			var Newteachers = new teacher ({
					teacherName : req.body[i].teacherName,
					teacherAge : req.body[i].teacherAge,
					teacherPhone :req.body[i].teacherPhone,
					teacherAddress:req.body[i].teacherAddress,
					teacherLevelteach: req.body[i].teacherLevelteach,
			});
			Newteachers.save(function (err,newteacher) {
				console.log("newteacher")
				if (err) {
					res.status(500).res.send(err);
					console.log(err)
				}
			})

		}
		res.json(req.body);
		console.log('insert teachers succefuly')
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
