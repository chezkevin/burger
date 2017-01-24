// module.exports = {
//   mysql: require("mysql"),
//   connection: mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//
//     // Your username
//     user: "root",
//
//     // Your password
//     password: "Suicytwo2",
//     database: "burgers"
//   }),
//   connection.connect: function(err){
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
//   });
//   }
// }

// // require the necessary libraries
// var mysql = require("mysql");
// var inquirer = require("inquirer");
//
// // set up connection to database
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//
//   // Your username
//   user: "root",
//
//   // Your password
//   password: "",
//   database: "bamazon"
// });
//
// // if err, display error. Else, display store for customer
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   displayItems();
//   runSearch();
// });
