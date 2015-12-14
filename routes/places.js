var express = require('express');
var router = express.Router();
var model = require('../models/Places');
var places = model.Places;
/* GET users listing. */

router.get('/', function(req, res) {
  return req.json({ result: "false"})
});

module.exports = router;
