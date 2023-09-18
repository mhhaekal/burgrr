'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ transaction }) {
      this.hasMany(transaction, { foreignKey: 'user_id' })
    }
  }
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    role: DataTypes.STRING,
    status: DataTypes.STRING,
    isDelete: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};