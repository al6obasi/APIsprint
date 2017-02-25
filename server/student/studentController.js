//require files here
var student = require ('./studentModel');
module.exports ={
	//you have to use the student model to make a new database entry 
	insertStudents : function (req, res) {
		console.log(req.body)
		var NewStudent = new student ({
				studentName : req.body.studentName,
				studentAge : req.body.studentAge,
				studentPhone :req.body.studentPhone,
				studentAddress:req.body.studentAddress,
				studentLevel: req.body.studentLevel,
		})
		NewStudent.save(function (err,newStudent) {
			if (err) {
				res.status(500).res.send(err);

			}
			else{
				res.json(newStudent)
			}
			
		})
	},
	//you need to retrive all students from dbs
	getAllStudents : function (req, res) {
	// student.find().exec(function (err, allStudents) {
	// 		if(err){
	// 			res.status(500).send('err');
	// 		}else{
	// 			res.status(200).send(allStudents);
	// 		}
	// 	});
	console.log('yeaaaaa')
	res.json('yeaaaaa')
	},
	
	//you need to use params.id to find a student from your database
	getStudentsById: function (req,res) {
		student.findOne({_id:req.params.id}).exec(function (err, onestudent) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(onestudent);
			}
		});
	}
	
}
