const foodController = require('../Controllers/foodController');
const express = require('express');
const router = express.Router();

router.route('/foodCourt/:type').get(foodController.getFoods);
router.route('/foodController/addItems').get(foodController.createFood);
