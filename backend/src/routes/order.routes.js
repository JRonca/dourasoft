const express = require('express');

const router = express.Router();
const createOrder = require('../services/order/createOrder');
const listOrder = require('../services/order/listOrder');
const getOrder = require('../services/order/getOrder');
const updateOrder = require('../services/order/updateOrder');
const deleteOrder = require('../services/order/deleteOrder');
const searchClientOrder = require('../services/order/searchClientOrder');
const updateClientOrder = require('../services/order/updateClientOrder');

router.post('/', createOrder);
router.get('/', listOrder);
router.get('/:id', getOrder);
router.get('/client/:id_client', searchClientOrder);
router.put('/:id', updateOrder);
router.patch('/client/:id', updateClientOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
