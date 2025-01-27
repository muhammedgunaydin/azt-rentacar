const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaymentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true,
  },
  amount:{
    type: Number,
    required: true,
  },
  paymentMethod:{
    type: String,
    enum: ['Credit Card', 'Debit Card', 'Cash'],
    required: true,
  },
  status:{
    type :String,
    enum: ['Pending', 'Completed', 'Failed'],
    default: 'Pending',
  }
})

const Payment = mongoose.model('Payment', PaymentSchema)

module.exports = Payment


