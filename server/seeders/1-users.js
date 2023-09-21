"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          username: "haekal",
          email: "mhaekal55@gmail.com",
          password: "$2a$10$dkgE.p4QWCd45PoFuAd3we6b.Xv6FM2IxArDNE3HqMWXAEFl6pf86",
          image: `publicprofile1.jpeg`,
          role: "admin",
          status: "active",
          isDelete: 0,
        },
        {
          id: 2,
          username: "andrean",
          email: "andrean923@gmail.com",
          password: "$2a$10$dkgE.p4QWCd45PoFuAd3we6b.Xv6FM2IxArDNE3HqMWXAEFl6pf86",
          image: "publicprofile1.jpeg",
          role: "cashier",
          status: "active",
          isDelete: 0,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
