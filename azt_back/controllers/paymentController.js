const Payment = require('../models/Payment')

exports.createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body)
    res.status(201).send('Payment created successfully')
  } catch (err) {
    res.status(400).json({
      status: 'Failed to create payment',
      err,
    })
  }
}

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
    res.status(200).json(payments)
  } catch (err) {
    res.status(500).json({
      status: 'Error getting all payments',
      err,
    })
  }
}

exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id)
    if (!payment) return res.status(404).send('Payment not found')
    res.status(200).json(payment)
  } catch (err) {
    res.status(500).json({
      status: 'Error getting payment by id',
      err,
    })
  }
}

exports.updatePayment = async (req, res) => {
  try {
    const updatePayment = await Payment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!updatePayment) return res.status(404).send('Payment not found')
    res.status(200).json(updatePayment)
  } catch (err) {
    res.status(500).json({
      status: 'Failed to update Payment',
      err,
    })
  }
}

exports.deletePayment = async (req, res) => {
  try {
    const dltPayment = await Payment.findByIdAndDelete(req.params.id)
    if (!dltPayment) return res.status(404).send('Payment not found')
    res.status(200).send('Payment deleted successfully')
  } catch (err) {
    res.status(500).json({
      status: 'Failed to delete payment',
      err,
    })
  }
}
