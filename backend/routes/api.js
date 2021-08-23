const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const itemController = require('../controllers/itemController');


router.get('/isloggedin', userController.user_is_loggedin_get);

router.post('/login', userController.user_login_post);

router.post('/register', userController.user_create_post);

router.get('/user', userController.user_logged_in_get);

router.get('/logout', userController.user_logout_get);

router.post('/item/create', itemController.item_create_post);

router.post('/item/update', itemController.item_update_post);

router.post('/item/delete', itemController.item_delete_post);

router.get('/item/list', itemController.item_list);



module.exports = router;
