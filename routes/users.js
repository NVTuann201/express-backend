const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Create a new user
router.post('/users', userController.createUser);

// User login
router.post('/login', userController.loginUser);

// User logout
router.post('/logout', authMiddleware, userController.logoutUser);

// Get user info
router.get('/me', authMiddleware, userController.getUserInfo);

module.exports = router;
