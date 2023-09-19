'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('users',
    //   [
    //     {
    //       id: 1,
    //       username: 'haekal',
    //       email: 'mhaekal55@gmail.com',
    //       password: 'abc123',
    //       image: 'public\profile1.jpeg',
    //       role: 'admin',
    //       status: 'active',
    //       isDelete: 0
    //     }
    //   ], {}
    // );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
