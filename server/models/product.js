'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    static associate({ category, cart, transaction_detail }) {
      this.belongsTo(category, { foreignKey: 'category_id' })
      this.hasMany(cart, { foreignKey: 'product_id' })
      this.hasMany(transaction_detail, { foreignKey: 'product_id' })
    }
  }
  product.init({
    product_name: DataTypes.STRING,
    product_image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    isDelete: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};