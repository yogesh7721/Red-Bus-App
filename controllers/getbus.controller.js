
const asyncHandler = require("express-async-handler")
const getBus = require("../models/getBus")
const { checkEmpty } = require("../utils/checkEmpty")
const BusSeats = require("../models/BusSeats")




exports.AddRoute = asyncHandler(async (req, res) => {
    const { from, to, date, } = req.body
    const { isError, error } = checkEmpty({ date, from, to, })
    if (isError) {
        return res.status(401).json({ message: "All Fields Required", error: error })
    }
    await getBus.create({ from, to, date, })
    res.status(200).json({ message: "Seat book success" })
})
exports.SearchBusses = asyncHandler(async (req, res) => {
    const { from, to, } = req.body
    const isfound = await BusSeats.find({ from, to })
    if (!isfound) {
        return res.status(400).json({ message: "Busses not found..." })
    }
    res.json({ message: "Bus find success...", result: isfound })

})