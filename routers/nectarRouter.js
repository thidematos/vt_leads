const express = require('express');
const nectarController = require('./../controllers/nectarController');

const router = express.Router();

router
  .route('/')
  .post(nectarController.createContact)
  .get(nectarController.getContacts);

module.exports = router;
