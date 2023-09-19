'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('products',
    //   [
    //     {
    //       id: 1,
    //       product_name: 'Cheeseburger',
    //       product_image: 'public/1.png',
    //       price: 32000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 1
    //     },
    //     {
    //       id: 2,
    //       product_name: 'Double Cheeseburger',
    //       product_image: 'public/2.png',
    //       price: 39500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 1
    //     },
    //     {
    //       id: 3,
    //       product_name: 'Triple Cheeseburger',
    //       product_image: 'public/3.png',
    //       price: 61500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 1
    //     },
    //     {
    //       id: 4,
    //       product_name: 'Beef Burger',
    //       product_image: 'public/4.png',
    //       price: 22500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 1
    //     },
    //     {
    //       id: 5,
    //       product_name: 'Big Burger',
    //       product_image: 'public/5.png',
    //       price: 41000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 1
    //     },
    //     {
    //       id: 6,
    //       product_name: 'Chicken Burger',
    //       product_image: 'public/6.png',
    //       price: 22500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 1
    //     },
    //     {
    //       id: 7,
    //       product_name: 'Fish Fillet Burger',
    //       product_image: 'public/7.png',
    //       price: 32000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 1
    //     },
    //     {
    //       id: 8,
    //       product_name: 'Rice',
    //       product_image: 'public/8.png',
    //       price: 5000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 2
    //     },
    //     {
    //       id: 9,
    //       product_name: 'Spicy Chicken',
    //       product_image: `public/9.png`,
    //       price: 24000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 2
    //     },
    //     {
    //       id: 10,
    //       product_name: 'Crispy Chicken',
    //       product_image: 'public/10.png',
    //       price: 24000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 2
    //     },
    //     {
    //       id: 11,
    //       product_name: 'Chicken Nuggets',
    //       product_image: 'public/11.png',
    //       price: 38500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 2
    //     },
    //     {
    //       id: 12,
    //       product_name: 'Chicken Stick',
    //       product_image: 'public/12.png',
    //       price: 14500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 2
    //     },
    //     {
    //       id: 13,
    //       product_name: 'Spicy Nuggets',
    //       product_image: 'public/13.png',
    //       price: 38500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 2
    //     },
    //     {
    //       id: 14,
    //       product_name: 'Garlic Fish Rice',
    //       product_image: 'public/14.png',
    //       price: 24500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 3
    //     },
    //     {
    //       id: 15,
    //       product_name: 'Rica Rica Fish Rice',
    //       product_image: 'public/15.png',
    //       price: 24500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 3
    //     },
    //     {
    //       id: 16,
    //       product_name: 'Sausage Wrap',
    //       product_image: 'public/16.png',
    //       price: 17500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 4
    //     },
    //     {
    //       id: 17,
    //       product_name: 'Breakfast Wrap',
    //       product_image: 'public/17.png',
    //       price: 17500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 4
    //     },
    //     {
    //       id: 18,
    //       product_name: 'Chicken Wrap',
    //       product_image: 'public/18.png',
    //       price: 17500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 4
    //     },
    //     {
    //       id: 19,
    //       product_name: 'Fish Wrap',
    //       product_image: 'public/19.png',
    //       price: 17500,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 4
    //     },
    //     {
    //       id: 20,
    //       product_name: 'Lemon Tea',
    //       product_image: 'public/20.png',
    //       price: 14000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 5
    //     },
    //     {
    //       id: 21,
    //       product_name: 'Coca-Cola',
    //       product_image: 'public/21.png',
    //       price: 14000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 5
    //     },
    //     {
    //       id: 22,
    //       product_name: 'Sprite',
    //       product_image: 'public/22.png',
    //       price: 14000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 5
    //     },
    //     {
    //       id: 23,
    //       product_name: 'Fanta',
    //       product_image: 'public/23.png',
    //       price: 14000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 5
    //     },
    //     {
    //       id: 24,
    //       product_name: 'Mineral Water',
    //       product_image: 'public/24.png',
    //       price: 10000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 5
    //     },
    //     {
    //       id: 25,
    //       product_name: 'Vanilla Ice Cream Cone',
    //       product_image: 'public/25.png',
    //       price: 7000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 6
    //     },
    //     {
    //       id: 26,
    //       product_name: 'Choco Top Vanilla Ice Cream Cone',
    //       product_image: 'public/26.png',
    //       price: 9000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 6
    //     },
    //     {
    //       id: 27,
    //       product_name: 'Choco Sundae',
    //       product_image: 'public/27.png',
    //       price: 12000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 6
    //     },
    //     {
    //       id: 28,
    //       product_name: 'Strawberry Sundae',
    //       product_image: 'public/28.png',
    //       price: 12000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 6
    //     },
    //     {
    //       id: 29,
    //       product_name: 'Cappucino',
    //       product_image: 'public/29.png',
    //       price: 22000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 7
    //     },
    //     {
    //       id: 30,
    //       product_name: 'Espresso',
    //       product_image: 'public/30.png',
    //       price: 22000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 7
    //     },
    //     {
    //       id: 31,
    //       product_name: 'Hot Chocolate',
    //       product_image: 'public/31.png',
    //       price: 25000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 7
    //     },
    //     {
    //       id: 32,
    //       product_name: 'Macchiato',
    //       product_image: 'public/32.png',
    //       price: 25000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 7
    //     },
    //     {
    //       id: 33,
    //       product_name: 'Mocca Latte',
    //       product_image: 'public/33.png',
    //       price: 25000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 7
    //     },
    //     {
    //       id: 34,
    //       product_name: 'French Fries',
    //       product_image: 'public/34.png',
    //       price: 21000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 8
    //     },
    //     {
    //       id: 35,
    //       product_name: 'Sweet Corn',
    //       product_image: 'public/35.png',
    //       price: 20000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 8
    //     },
    //     {
    //       id: 36,
    //       product_name: 'Apple Pie',
    //       product_image: 'public/36.png',
    //       price: 12000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 8
    //     },
    //     {
    //       id: 37,
    //       product_name: 'Cheese Stick',
    //       product_image: 'public/37.png',
    //       price: 20000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 8
    //     },
    //     {
    //       id: 38,
    //       product_name: 'Chicken Curry Puff',
    //       product_image: 'public/38.png',
    //       price: 15000,
    //       description: 'test',
    //       isDelete: 0,
    //       category_id: 8
    //     },
    //   ], {}
    // );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
