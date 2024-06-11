const express = require('express');
const { 
    registerUser, 
    loginUser, 
    getUserProfile, 
    getAllUsers, 
    blockUser 
} = require('../Controller/AuthController');
const { protect, admin } = require('../Middleware/AdminMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.get('/users', protect, admin, getAllUsers);
router.put('/block/:userId', protect, admin, blockUser);

module.exports = router;
