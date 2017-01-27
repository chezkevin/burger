// require the database connection
var connection = require('./connection.js');

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne,
  selectScoped: selectScoped,
  updateOne: updateOne
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

function selectScoped(table, column, value, callback) {
    var query = 'SELECT * FROM ' + table + ' WHERE ' + column + ' = ' + value;
    connection.query(query, function(error, data) {
        if (error) throw error;
        callback(data);
    });
}

function updateOne(burgId,cb){
  var query = 'UPDATE burgers SET devoured = 1 WHERE id = ?';
  connection.query(query,[burgId],function(error,data){
    if (error) throw error;
    cb();
  })
}
