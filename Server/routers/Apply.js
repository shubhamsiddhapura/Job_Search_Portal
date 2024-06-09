const express = require('express')

const router = express.Router();

const {applyJob} = require("../controllers/Apply");
const { auth, isJobSeeker } = require('../middlewares/Auth');

router.post("/applyJob",auth,isJobSeeker,applyJob);

module.exports = router;