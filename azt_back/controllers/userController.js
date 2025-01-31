const User = require('../models/User')
const bcrypt = require('bcryptjs')

exports.createUser = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser)
      return res.status(400).json({ error: 'Email already in use' })

    const hashedpassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      name,
      surname,
      email,
      password: hashedpassword,
    })
    await newUser.save()
    res
      .status(201)
      .json({ message: 'User created successfully', user: newUser })
  } catch (err) {
    res.status(500).json({
      status: 'Failed to create user',
      err,
    })
  }
}

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: 'Invalid credentiasl' })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid credentials' })
    res.status(200).json({ message: 'Login succesfull', user })
  } catch (err) {
    res.status(500).json({ message: 'Error login in', err })
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find()
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({
      status: 'Failed to get users',
      err,
    })
  }
}

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id).select('-password')
    if (!user) return res.status(404).json({ message: 'User not found' })

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ message: 'Error getting user', err })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const dltUser = await User.findByIdAndDelete(req.params.id)
    if (!dltUser) return res.status(404).send('User not found')
    res.status(200).send('User deleted successfully')
  } catch (err) {
    res.status(500).json({
      status: 'Error deleting user',
      err,
    })
  }
}
