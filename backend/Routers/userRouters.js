const userController = require('../Controllers/userController')
const express = require('express')
const router = express.Router()


router.route('/signup',userController.createUser)
router.route('/login',userController.createUser)