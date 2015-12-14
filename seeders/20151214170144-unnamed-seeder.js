'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('Places', [{
        name:         'Bangkok',
        description:  'A city where the familiar and the exotic collide like the flavours on a plate of pàt tai',
        dailySpend:   600,
        placeType:    'area',
        currency:     'TBH',
        distance:     12,
        from:         'Bangkok',
        parent:       'Thailand'
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
