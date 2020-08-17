const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');

const DB_USER = 'jackmfa';
const PASSWORD = encodeURIComponent('Janak@123'); 

connectionString = `mongodb://${DB_USER}:${PASSWORD}@ds249355.mlab.com:49355/mfa`

// DB connection
var MONGODB_URL = connectionString;
var mongoose = require("mongoose");
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true ,  useFindAndModify: false }).then(() => {
	//don't show the log when it is test
	if(process.env.NODE_ENV !== "test") {
		console.log("Connected to %s", MONGODB_URL);
		console.log("App is running ... \n");
		console.log("Press CTRL + C to stop the process. \n");
	}
})
	.catch(err => {
		console.error("App starting error:", err.message);
		process.exit(1);
	});
var db = mongoose.connection;

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
  });
app.get('/otp',function(req,res) {
    res.sendFile(__dirname + '/public/otp.html');
  });
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
