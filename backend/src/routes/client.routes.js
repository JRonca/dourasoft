const express = require('express');

const router = express.Router();
const createClient = require('../services/client/createClient');
const listClient = require('../services/client/listClient');
const getClient = require('../services/client/getClient');
const updateClient = require('../services/client/updateClient');
const deleteClient = require('../services/client/deleteClient');

router.post('/', createClient);
router.get('/', listClient);
router.get('/:id', getClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

module.exports = router;
