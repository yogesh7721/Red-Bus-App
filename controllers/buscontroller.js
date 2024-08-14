

const asyncHandler = require("express-async-handler")
const BusSeats = require("../models/BusSeats")

exports.SeatBook = asyncHandler(async (req, res) => {
    await BusSeats.create(req.body)
    res.status(200).json({ message: "Seat book success" })
})