

const asyncHandler = require("express-async-handler")
const BusBookSeat = require("../models/BusBookSeat")

exports.BookSeat = asyncHandler(async (req, res) => {
    await BusBookSeat.create(req.body)
    res.json({ message: "Seat Book Success...." })
})
exports.GetBookSeat = asyncHandler(async (req, res) => {
    const result = await BusBookSeat.find()
    res.json({ message: "Seat Book Fetfch Success....", result })
})
