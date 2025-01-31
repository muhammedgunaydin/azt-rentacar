const express = require('express')
const userController = require('../controllers/userController')
const { verifyToken, verifyAdmin } = require('../middlewares/authMiddleware')

const router = express.Router()

router.route('/register').post(userController.createUser)
router.route('/login').post(userController.loginUser)
router.route('/').get(verifyToken, verifyAdmin, userController.getAllUsers)
router.route('/:id').get(verifyToken, verifyAdmin, userController.getUser)
router.route('/:id').delete(verifyToken, verifyAdmin, userController.deleteUser)

module.exports = router
