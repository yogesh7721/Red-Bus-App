const authController = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/register-admin", authController.RegisterAdmin)
    .post("/login-admin", authController.LoginAdmin)
    .post("/verifyAdminOTP", authController.VerifyOTP)
    .post("/logout-admin", authController.LogoutAdmin)

module.exports = router