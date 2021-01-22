const express = require('express');
const controller = require('../controllers/latestFixtureController');

const router = express.Router();

// ---------------------------
// Route Methods
// ---------------------------
router.route('/').get(controller.getLatestFixtureId);

module.exports = router;