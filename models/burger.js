// require the orm
var orm = require('../config/orm.js');

// library of functions to be exported
module.exports = {
    allBurgers   : burgers,
    create       : create
    // singleBurger : singleBurger,
    // update       : update
}

// get all the burgers -- an object is returned with uneaten and eaten burgers
function burgers(cb) {
    orm.selectAll('burgers', function(data) {
        cb(data);
    });
}

function create(newBurg,cb){
  orm.insertOne(newBurg,function(){
    cb();
  });
}
