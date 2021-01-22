const express = require('express');
const controller = require('../controllers/fixturesController');

const router = express.Router();

// ---------------------------
// Route Methods
// ---------------------------
router.route('/').get(controller.getFixtures);

module.exports = router;