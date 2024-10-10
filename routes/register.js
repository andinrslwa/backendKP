const express = require("express");
const router = express.Router(); // Capital "R" in Router
const registerController = require('../controller/registerController');

router.post('/register', registerController.register);

module.exports = router;
