const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');
const dbConfig = require('../config/database');

const Client = require('./models/client');
const Product = require('./models/product');
const Order = require('./models/order');
const ListProducts = require('./models/listproducts');

const connection = new Sequelize(dbConfig);

Client(connection, DataTypes);
Product(connection, DataTypes);
Order(connection, DataTypes);
ListProducts(connection, DataTypes);

Client(connection, DataTypes).associate(connection.models);
Product(connection, DataTypes).associate(connection.models);
Order(connection, DataTypes).associate(connection.models);
ListProducts(connection, DataTypes).associate(connection.models);

module.exports = connection;
