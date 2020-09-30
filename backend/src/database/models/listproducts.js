'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Order, {foreignKey: 'order_id'});
      this.belongsTo(models.Product, {foreignKey: 'id_product'});
    }
  };
  ListProducts.init({
    id_product: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    unitary_value: DataTypes.NUMERIC,
    amount: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'ListProducts',
  });
  return ListProducts;
};