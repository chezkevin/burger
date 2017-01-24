/*********************
Dependencies
*********************/

var express = require('express');
var exprhbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// initialize the user-entered burgers array
var userBurgers = [];

// Sets up the Express App
// =============================================================
// creates an instance of the express function
var app = express();

// setting the env variable allows this to be deployed easily to Heroku
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

/*********************
Belongs in connection.js
Connects to sql database
*********************/

// require the necessary libraries
var mysql = require("mysql");

// set up connection to database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Suicytwo2",
  database: "burgers_db"
});

// if err, display error. Else, display store for customer
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

/*********************
end of connection.js
*********************/

/*********************
uses handlebars to display
*********************/

// creates a new engine. The handlebars files live in the app/view/layouts folder
app.engine('handlebars',exprhbs({defaultLayout: 'main'}));
// tells us to use the handlebars engine
app.set('view engine','handlebars');

// uses a route to go to in the app/views folder and return which handlebars file to use
// in this case, index.handlebars
// inserts the userBurgers array to the burgers object in index.handleBars, and then renders it
app.get('/index', function (req, res){
	res.render('index',{burgers: userBurgers})
});

// submit burger to database
$(".submit").on("click", function() {
  alert("clicked!");
})
