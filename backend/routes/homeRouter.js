// eslint validated

var express = require('express');
var router = express.Router();

// Render the home page of the server
router.get('/', function (req, res) {
  res.render("index");
});



module.exports = router;
