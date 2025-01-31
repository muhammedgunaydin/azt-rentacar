const express = require('express')
const bookingController = require('../controllers/bookingController')

const router = express.Router()

router.route('/').post(bookingController.createBooking)
router.route('/').get(bookingController.getAllBookings)
router.route('/:id').get(bookingController.getBookingById)
router.route('/:id').patch(bookingController.updateBooking)
router.route('/:id').delete(bookingController.deleteBooking)

module.exports = router