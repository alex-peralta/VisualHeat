var express = require("express");

var router = express.Router();

// Import the model (heat.js) to use its database functions.
var heat = require("../models/heat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  heat.all(function(data) {
    var hbsObject = {
      heat: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  //later add params we want to use in our database
  heat.create([""], [],
   function() {
    res.redirect("/");
  });
});



// Export routes for server.js to use.
module.exports = router;
