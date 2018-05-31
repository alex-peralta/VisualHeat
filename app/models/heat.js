// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var heat = {
  all: function(cb) {
    //add params 
    orm.selectAll("", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    //add params
    orm.updateOne("", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (heat.js).
module.exports = heat;
