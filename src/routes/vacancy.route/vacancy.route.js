const express = require("express");
const router = express.Router();
const POST_VACANCY = require('../../controller/vacancy.controller/Post.controller')
const auth = require("../../middleware/auth");

// 
router.post('/post-vacency', auth.VerifyJWT, POST_VACANCY)

module.exports = router;