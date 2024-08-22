
const asyncHandler = require("express-async-handler")
const getBus = require("../models/getBus")
const { checkEmpty } = require("../utils/checkEmpty")


exports.AddRoute = asyncHandler(async (req, res) => {
    const { from, to, date, } = req.body
    const { isError, error } = checkEmpty({ date, from, to, })
    if (isError) {
        return res.status(401).json({ message: "All Fields Required", error: error })
    }
    await getBus.create({ from, to, date, })
    res.status(200).json({ message: "Seat book success" })
})