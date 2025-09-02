const express = require('express');
const nectarController = require('./../controllers/nectarController');

const router = express.Router();

router.route('/').post(nectarController.createContact);

module.exports = router;
