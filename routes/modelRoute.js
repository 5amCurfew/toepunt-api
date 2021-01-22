const express = require('express');
const controller = require('../controllers/modelController');

const router = express.Router();

// ---------------------------
// Route Methods
// ---------------------------
router.route('/').get(controller.getModel);

module.exports = router;