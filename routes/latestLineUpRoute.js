const express = require('express');
const controller = require('../controllers/latestLineUpController');

const router = express.Router();

// ---------------------------
// Route Methods
// ---------------------------
router.route('/').get(controller.getLatestLineUp);

module.exports = router;