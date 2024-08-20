const userConroller = require("../controllers/user.controller")

const router = require("express").Router()

router
    .post("/register-user", userConroller.RegisterUser)
    .post("/login-user", userConroller.LoginUser)
// .post("/user-otp", userConroller.VerifyOTPUser)
// .post("/logout-user", userConroller.LogoutAdmin)

module.exports = router             