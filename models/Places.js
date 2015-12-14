var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    var Places = sequelize.define("Places", {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        dailySpend: Sequelize.INTEGER,
        distance: Sequelize.INTEGER,
        placeType: Sequelize.STRING,
        currency: Sequelize.STRING,
        distance: Sequelize.INTEGER,
        from: Sequelize.STRING,
        parent: Sequelize.STRING
    });
    return Places
};
