const express= require('express')
const route = express.Router()

const Expense = require('../controller/sign')

route.post('/signup', Expense.PostUser)
route.post("/verify", otp_verification.otpMiddleware);
route.post(
    "/signup",
    otp_verification.verifyOTPMiddleware,
    authcontrollers.post_signup
  );
  

module.exports = route