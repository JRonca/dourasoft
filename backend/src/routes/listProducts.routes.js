const express = require('express');

const router = express.Router();
const createListProducts = require('../services/listProducts/createListProducts');
const listListProducts = require('../services/listProducts/listListProducts');
const getListProducts = require('../services/listProducts/getListProducts');
const updateListProducts = require('../services/listProducts/updateListProducts');
const deleteListProducts = require('../services/listProducts/deleteListProducts');

router.post('/', createListProducts);
router.get('/order/:order_id', listListProducts);
router.get('/:id', getListProducts);
router.put('/:id', updateListProducts);
router.delete('/:id', deleteListProducts);

module.exports = router;
