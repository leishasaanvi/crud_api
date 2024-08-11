const express = require("express")
const router = express.Router();

const userController = require('./users.controller.js')

router.get('/', userController.getUsers)
router.post('/', userController.addUsers)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
module.exports = router