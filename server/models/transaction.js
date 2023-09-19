'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    static associate({ user, transaction_detail }) {
      this.belongsTo(user, { foreignKey: 'user_id' })
      this.hasMany(transaction_detail, { foreignKey: 'transaction_id' })
    }
  }
  transaction.init({
    total: DataTypes.INTEGER,
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
    modelName: 'transaction',
  });
  return transaction;
};