const userController = require('../Controllers/userController')
const express = require('express')
const router = express.Router()


router.route('/signup').get(userController.createUser);
router.route('/login').get(userController.createUser);
module.export = router;