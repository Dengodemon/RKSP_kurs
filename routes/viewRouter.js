const express = require('express');
const authController = require('../controllers/AuthController');
const router = express.Router();

router.get('/user', authController.checkUser);

module.exports = router;