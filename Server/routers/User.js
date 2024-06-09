const express = require('express');

const router = express.Router();

const { login , sendOTP , signUp} = require("../controllers/Auth")

const {auth} = require("../middlewares/Auth")


//login signup and send otp routes
router.post("/signup", signUp);
router.post("/sendotp", sendOTP);
router.post("/login",login);

module.exports = router;