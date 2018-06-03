// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var heat = {
  country_list: function(cb) {
    //add params 
    orm.selectAll("country", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  country_temp: function(country_code,cb) {
    orm.selectCountryTemp(country_code,function(res) {
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
