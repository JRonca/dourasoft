const express = require('express');

const router = express.Router();
const createProduct = require('../services/product/createProduct');
const listProduct = require('../services/product/listProduct');
const getProduct = require('../services/product/getProduct');
const updateProduct = require('../services/product/updateProduct');
const deleteProduct = require('../services/product/deleteProduct');

router.post('/', createProduct);
router.get('/', listProduct);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
