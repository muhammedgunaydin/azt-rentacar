const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router();

router.route('/register').post(userController.createUser)
router.route('/login').post(userController.loginUser)
router.route('/:id').get(userController.getUser)
router.route('/:id').delete(userController.deleteUser)

module.exports = router