const Booking = require('../models/Booking')

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body)
    res.status(201).send('Booking created successfully')
  } catch (err) {
    res.status(400).json({
      status: 'error creating booking',
      err,
    })
  }
}

exports.getAllBookings = async (req, res) => {
  try {
    const booking = await Booking.find()
    res.status(200).json(booking)
  } catch (err) {
    res.status(500).json({
      status: 'Failed to fetching all bookings',
      err,
    })
  }
}

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
    if (!booking) return res.status(404).send('Booking not found')
    res.status(200).json(booking)
  } catch (err) {
    res.status(500).json({
      status: 'Failed to fetch booking by id',
      err,
    })
  }
}

exports.updateBooking = async (req, res) => {
  try {
    const uptBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!uptBooking) return res.status(404).send('Booking not found')
    res.status(201).json(uptBooking)
  } catch (err) {
    res.status(500).json({
      status: 'Failed to update booking',
      err,
    })
  }
}

exports.deleteBooking = async (req, res)=>{
    try {
        const dltBooking = await Booking.findByIdAndDelete(req.params.id)
        if(!dltBooking) return res.status(404).send('Booking not found')
        res.status(200).send('Booking deleted successfully')
    } catch (err) {
        res.status(500).json({
            status: 'Failed to delete booking',
            err,
        })
    }
}
