'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('categories',
    //   [
    //     {
    //       id: 1,
    //       name: 'Burger',
    //       isDelete: 0
    //     },
    //     {
    //       id: 2,
    //       name: 'Chicken',
    //       isDelete: 0
    //     },
    //     {
    //       id: 3,
    //       name: 'Fish',
    //       isDelete: 0
    //     },
    //     {
    //       id: 4,
    //       name: 'Wrap',
    //       isDelete: 0
    //     },
    //     {
    //       id: 5,
    //       name: 'Drink',
    //       isDelete: 0
    //     },
    //     {
    //       id: 6,
    //       name: 'Dessert',
    //       isDelete: 0
    //     },
    //     {
    //       id: 7,
    //       name: 'Coffee',
    //       isDelete: 0
    //     },
    //     {
    //       id: 8,
    //       name: 'Snack',
    //       isDelete: 0
    //     },
    //   ], {}
    // );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
