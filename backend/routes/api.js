const express = require('express');
const router = express.Router();
const passport = require('passport')

const userController = require('../controllers/userController');


router.post('/login', userController.user_login_post);

router.post('/register', userController.user_create_post);

router.get('/user', userController.user_logged_in_get);

router.get('/logout', userController.user_logout_get)

module.exports = router;
