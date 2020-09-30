'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Client, {foreignKey: 'id_client'});
      this.hasMany(models.ListProducts), {foreignKey: 'order_id'};
    }
  };
  Order.init({
    id_client: DataTypes.INTEGER,
    total: DataTypes.NUMERIC,
    data: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};