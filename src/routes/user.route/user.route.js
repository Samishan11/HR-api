const express = require("express");
const router = express.Router();
const LOGIN = require('../../controller/user.controller/Signin.controller')
const REGISTER = require('../../controller/user.controller/Siginup.controller')

router.post('/register',REGISTER)
router.post('/login',LOGIN)

module.exports = router;