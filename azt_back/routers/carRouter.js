const express = require('express');
const carController = require('../controllers/carController')

const router = express.Router();

router.route('/create').post(carController.createCar)

module.exports = router

