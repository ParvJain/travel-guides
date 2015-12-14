var Sequelize = require("sequelize");

var sequelize = new Sequelize("postgres://postgres:ubuntu@localhost:5432/travelguides");
var placesService = require("./placesService";)(sequelize);
sequelize.sync()
