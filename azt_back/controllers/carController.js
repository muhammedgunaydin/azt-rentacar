const Car = require('../models/Car')

exports.createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body)
    res.status(201).send(`${car.brand}+${car.model} created successfully`)
  } catch (err) {
    res.status(400).json({
      status: 'failed to create car',
      err,
    })
  }
}
