

const asyncHandler = require("express-async-handler")
const BusSeats = require("../models/BusSeats")
const { checkEmpty } = require("../utils/checkEmpty")

exports.SeatBook = asyncHandler(async (req, res) => {
    const { date, from, to, isSleeper, driver, coDriver, provider, seats, img } = req.body
    const { isError, error } = checkEmpty({ date, from, to, isSleeper, driver, coDriver, img })
    if (isError) {
        return res.status(401).json({ message: "All Fields Required", error: error })
    }
    await BusSeats.create({ date, from, to, isSleeper, driver, coDriver, provider, seats, image: img })
    res.status(200).json({ message: "Seat book success" })
})

exports.getAllSeatBookAdminData = asyncHandler(async (req, res) => {
    const result = await BusSeats.find()
    res.json({ message: "All Seat book find...", result })
})
exports.getAllSeatBookUserData = asyncHandler(async (req, res) => {
    const result = await BusSeats.find()
    console.log(result);

    res.json({ message: "All Seat book find...", result })
})

exports.AdminSeatDelete = asyncHandler(async (req, res) => {
    await BusSeats.findByIdAndDelete(req.params.id,)
    res.json({ message: "Admin Seat Delete" })
})

exports.SeatBookCancle = asyncHandler(async (req, res) => {
    await BusSeats.findByIdAndUpdate(req.params._id, { status: "cancel" })
    res.json({ message: "seat cancel Sucess" })
})

