//require express and mongoose here
var mongoose = require ('mongoose');
var express = require ('express');
var app = express ();
app.get('/', function (req, res) {
  res.send('Hello World!')
})
//require your middleware and routes here
require('./config/middleware.js') (app,express); 
require('./config/routes.js') (app,express); 

//=============================================================================
/*									Database								 */
//=============================================================================


	//here you will have to connect to your mongo database, 
	//set the port number and console log something so that 
	//you know that the mongodb is connected

// Connect to the db
mongoose.connect("mongodb://localhost:27017/ApiSprintDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port


app.listen(3000, function () {
  console.log('my app listening on port 3000!')
})


// module.exports= //some thing;
module.exports = app;