const express = require('express');
const {
  addContactForm,
  getContactForms,
  getContactFormById,
  deleteContactForm,
} = require('../controllers/contactController');

const router = express.Router();

router.post('/', addContactForm);

router.get('/', getContactForms);

router.get('/:id', getContactFormById);

router.delete('/:id', deleteContactForm);

module.exports = router;
