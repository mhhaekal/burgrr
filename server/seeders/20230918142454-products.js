'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
      [
        {
          id: 1,
          product_name: 'test',
          product_image: 'test',
          price: 1000,
          description: 'test',
          isDelete: 0,
          category_id: 1
        }
      ], {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
