'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ListProducts), {foreignKey: 'id_product'};
    }
  };
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    code: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};