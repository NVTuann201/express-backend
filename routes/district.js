const express = require('express');
const router = express.Router();
const districtController = require('../controllers/districtController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/search', authMiddleware, districtController.search);

module.exports = router;
