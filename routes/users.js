const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Create a new user
router.post('/users', userController.create);

// User login
router.post('/login', userController.login);

// User logout
router.post('/logout', authMiddleware, userController.logout);

// Get user info
router.get('/me', authMiddleware, userController.getUserInfo);

module.exports = router;
