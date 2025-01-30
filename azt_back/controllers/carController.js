const Car = require('../models/Car')

exports.createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body)
    res.status(201).send(`${car.brand} ${car.model} created successfully`)
  } catch (err) {
    res.status(400).json({
      status: 'failed to create car',
      err,
    })
  }
}

exports.getAllCars = async (req, res) => {
  try {
    const car = await Car.find()
    res.status(200).json({ car })
  } catch (err) {
    res.status(400).json({
      status: 'failed to get all cars',
      err,
    })
  }
}

exports.GetCarById = async (req, res) => {
  try {
    const car = await Car.findById({ _id: req.params.id })
    res.status(200).json({ car })
  } catch (err) {
    res.status(400).json({
      status: 'failed to get car by id',
      err,
    })
  }
}

exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    )
    res.status(200).send('Car updated succesfully')
  } catch (err) {
    res.status(400).json({
      status: 'failed to update car',
      err,
    })
  }
}

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findOneAndDelete({ _id: req.params.id })
    res.status(200).send('Car deleted successfully')
  } catch (err) {
    res.status(400).json({
      status: 'failed to delete car',
      err,
    })
  }
}
