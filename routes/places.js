var express = require('express');
var router = express.Router();
var sequelize = require('../config/database')
var placesService = require("../models/Places")(sequelize);

router.get('/', function(req, res) {
  placesService.findAll()
    .then(function (place) {
    // console.log(place)
    // res.json({ result: place.name })
})
});

module.exports = router;
