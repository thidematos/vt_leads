const express = require('express');
const nectarController = require('./../controllers/nectarController');

const router = express.Router();

router
  .route('/')
  .post(nectarController.createContact)
  .get(nectarController.getContacts);

router.route('/:id').delete(nectarController.deleteContact);

module.exports = router;
