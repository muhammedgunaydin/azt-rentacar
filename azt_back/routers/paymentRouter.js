const express = require('express')
const paymentController = require('../controllers/paymentController')

const router = express.Router()

router.route('/').post(paymentController.createPayment)
router.route('/').get(paymentController.getAllPayments)
router.route('/:id').get(paymentController.getPaymentById)
router.route('/:id').patch(paymentController.updatePayment)
router.route('/:id').delete(paymentController.deletePayment)

module.exports = router