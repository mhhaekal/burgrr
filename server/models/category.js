'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ product }) {
      this.hasMany(product, { foreignKey: 'category_id' })
    }
  }
  category.init({
    name: DataTypes.STRING,
    isDelete: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};