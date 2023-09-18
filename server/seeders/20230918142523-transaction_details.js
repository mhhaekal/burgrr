'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transaction_details',
      [
        {
          id: 1,
          product_name: 'test',
          product_price: 1000,
          quantity: 1,
          amount: 1,
          product_id: 1,
          transaction_id: 1
        }
      ], {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transaction_details', null, {});
  }
};
