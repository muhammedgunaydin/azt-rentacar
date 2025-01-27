const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CarSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  pricePerDay: {
    type: Number,
    required: true,
  },
  fuelType: {
    type: String,
    enum: ['Manuel, Automatic, Electric, Hybrid'],
    required: true,
  },
  transmission: {
    type: String,
    enum: ['Automatic, Manual'],
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  km: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  }, //(img URL)
})

const Car = mongoose.model('Car', CarSchema)

module.exports = Car
