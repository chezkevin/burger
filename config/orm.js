// require the database connection
var connection = require('./connection.js');

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne
}

function selectAll(table, cb) {
  var query = 'SELECT * FROM ' + table;
  connection.query(query, function(error, data) {
      if (error) throw error;
      cb(data);
  });
}

function insertOne(burgName,cb){
  var query = 'INSERT into burgers(burger_name) VALUES(?)';
  connection.query(query,[burgName],function(error,data){
    if (error) throw error;
    cb();
  })
}
