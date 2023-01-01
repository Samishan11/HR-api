const express = require("express");
const router = express.Router();
const POST = require('../../controller/applicant.controller/Post.controller');
const GET = require('../../controller/applicant.controller/Get.controller');

router.post('/post-applicant', POST);
router.get('/get-applicant', GET);

module.exports = router;