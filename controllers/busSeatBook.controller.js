

const asyncHandler = require("express-async-handler")
const BusBookSeat = require("../models/BusBookSeat")
const sendEmail = require("../utils/email")

exports.BookSeat = asyncHandler(async (req, res) => {
    await BusBookSeat.create({ ...req.body, userId: req.loggedInUser })
    await sendEmail({
        to: "shelkey881@gmail.com",
        message: `<h1>Your Seat Book Is Success</h1>`,
        subject: "Seat Book Confirms"
    })
    res.json({ message: "Seat Book Success...." })
})
exports.GetBookSeat = asyncHandler(async (req, res) => {
    const result = await BusBookSeat.find()
    res.json({ message: "Seat Book Fetfch Success....", result })
})
