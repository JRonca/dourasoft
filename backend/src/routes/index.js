const { Router }= require('express');

const routes = Router();

const clientsRouter = require('./client.routes');
const productsRouter = require('./product.routes');
const ordersRouter = require('./order.routes');
const listProductsRouter = require('./listProducts.routes');

routes.use('/Client', clientsRouter);
routes.use('/Product', productsRouter);
routes.use('/Order', ordersRouter);
routes.use('/listProducts', listProductsRouter);

module.exports = routes;