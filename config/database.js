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

sequelize.sync()

module.exports = sequelize
