'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user, transaction_detail }) {
      this.belongsTo(user, { foreignKey: 'user_id' })
      this.hasMany(transaction_detail, { foreignKey: 'transaction_id' })
    }
  }
  transaction.init({
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};