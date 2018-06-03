var express = require("express");

var router = express.Router();

// Import the model (heat.js) to use its database functions.
var heat = require("../models/heat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  heat.country_list(function(data) {
    var hbsObject = {
      heat: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/api/:country", function(req, res) {
  var country_code = req.params.country;
  heat.country_temp(country_code,function(data) {
    var hbsObject = {
      heat: data
    };
    console.log(hbsObject);
    res.send(hbsObject);
  });
});

router.post("/api/:country", function(req, res) {
  var country_code = req.params.country;
  heat.country_temp(country_code,function(data) {
    var hbsObject = {
      heat: data
    };
    console.log(hbsObject);
    res.send(hbsObject);
  });
});



// Export routes for server.js to use.
module.exports = router;
