var express = require('express');
var router = express.Router();

// TODO: refactor this shit.
var Sequelize = require("sequelize");
var sequelize = new Sequelize('travelguides', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

var placesService = require("../models/Places")(sequelize);
sequelize.sync()

router.get('/', function(req, res) {
  placesService.findOne().then(function (user) {
    res.json({ result: user.name})
})
    // res.json({ result: 'user.name'})
});

module.exports = router;
