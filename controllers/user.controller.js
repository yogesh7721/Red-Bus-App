
const { checkEmpty } = require("../utils/checkEmpty")
const User = require("../models/User")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const BusBookSeat = require("../models/BusBookSeat")



// USER
exports.RegisterUser = asyncHandler(async (req, res) => {
    const { name, mobile, email, password, cpassword } = req.body
    const { isError, error } = checkEmpty({
        name, mobile, email, password, cpassword
    })
    if (isError) {
        return res.status(400).json({ message: "All Fields required", error })
    }
    if (!validator.isEmail) { return res.status(400).json({ message: "Invalid Email", }) }
    if (!validator.isMobilePhone(mobile, "en-IN")) { return res.status(400).json({ message: "Inalid Mobile" }) }
    if (!validator.isStrongPassword(password)) { return res.status(400).json({ message: "Provide Strong Password " }) }
    if (password !== cpassword) { { return res.status(400).json({ message: "Password Do not Match" }) } }
    const result = await User.findOne({ email })
    if (result) {
        return res.status(400).json({ message: "Email Already Registered with Us.!" })
    }
    const hash = await bcrypt.hash(password, 10)
    await User.create({ name, mobile, email, password: hash })
    res.json({ message: "User Register Success" })
})
exports.LoginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const { error, isError } = checkEmpty({ email, password })
    if (isError) { return res.status(400).json({ message: "All Fields required", error }) }
    const result = await User.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "Email Not Found" })
    }
    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(401).json({ message: "Password Do not Match" })
    }
    // token 
    const Token = JWT.sign({ userID: result._id }, process.env.JWT_KEY, { expiresIn: "180d" })
    // cookie => user
    res.cookie("user", Token, {
        maxAge: 86400000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    })

    console.log(result)

    res.json({
        message: "User Login Success", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
            mobile: result.mobile,
            avatar: result.avatar,
            mobileVerified: result.mobileVerified,
            emailVerified: result.emailVerified,
        }
    })
})

exports.LogoutUser = asyncHandler(async (req, res) => {
    res.clearCookie("user")
    res.json({ message: "User Logout Success" })
})


//booking...
exports.getBookedSeat = asyncHandler(async (req, res) => {
    const user = req.loggedInUser
    const result = await BusBookSeat.find(user)
    console.log(result)
    res.json({ message: "Seat Fetch Success", result })
})