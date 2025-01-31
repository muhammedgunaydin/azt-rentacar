const express = require('express');
const carController = require('../controllers/carController')
const {upload} = require('../config/cloudinary')

const router = express.Router();

router.post('/', upload.single('image'), carController.createCar)
router.route('/').get(carController.getAllCars)
router.route('/:id').get(carController.GetCarById)
router.route('/:id').patch(carController.updateCar)
router.route('/:id').delete(carController.deleteCar)

module.exports = router

