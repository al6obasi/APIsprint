//you need to require some files here
var teacherController =require ('../teacher/teacherController');
var studentController =require ('../student/studentController');
module.exports = function (app, express) {

//=============================================================================
/*								teacher route									 */
//=============================================================================
	app.get('/api/teacher/getAll', teacherController.getAllTeachers);
	//here you have to add two more routes
	app.post('/api/teacher/insertteachers', teacherController.insertTeachers);

	app.post('/api/teacher/:id', teacherController.getTeacherById);
//=============================================================================
/*								student route									 */
//=============================================================================
	app.post('/api/student/insterstudents', studentController.insertStudents);
	//here you have to add two more routes
	app.get('/api/student/getAll', studentController.getAllStudents);
	app.post('/api/student/:id', studentController.getStudentsById);
};

