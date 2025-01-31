const express = require('express');
const carController = require('../controllers/carController')

const router = express.Router();

router.route('/').post(carController.createCar)
router.route('/').get(carController.getAllCars)
router.route('/:id').get(carController.GetCarById)
router.route('/:id').patch(carController.updateCar)
router.route('/:id').delete(carController.deleteCar)

module.exports = router

