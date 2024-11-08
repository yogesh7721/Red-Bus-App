const userConroller = require("../controllers/user.controller")
const { userProtected } = require("../middleware/protected")

const router = require("express").Router()

router
    .post("/register-user", userConroller.RegisterUser)
    .post("/login-user", userConroller.LoginUser)
    .post("/logout-mobile-user", userConroller.LogoutUser)

    .get("/get-booked-Seat", userProtected, userConroller.getBookedSeat)

// .post("/getBus-user", userConroller.GetBus)

// .post("/user-otp", userConroller.VerifyOTPUser)
// .post("/logout-user", userConroller.LogoutAdmin)

module.exports = router