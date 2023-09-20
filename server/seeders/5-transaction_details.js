"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "transaction_details",
      [
        {
          id: 1,
          product_name: "Cheeseburger",
          product_price: 32000,
          quantity: 2,
          amount: 64000,
          product_id: 1,
          transaction_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("transaction_details", null, {});
  },
};
