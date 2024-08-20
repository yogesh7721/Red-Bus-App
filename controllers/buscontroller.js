

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

exports.getAllSeatBook = asyncHandler(async (req, res) => {
    const result = await BusSeats.find()
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






// exports.SeatBookCancel = asyncHandler(async (req, res) => {
//     try {
//         const { id } = req.params;

//         // Find and update the seat by ID
//         const seat = await BusSeats.findByIdAndUpdate(id, { status: "cancel" }, { new: true });

//         // Check if seat was found and updated
//         if (!seat) {
//             return res.status(404).json({ message: "Seat not found" });
//         }

//         // Respond with a success message
//         res.status(200).json({ message: "Seat canceled successfully....." });
//     } catch (error) {
//         // Handle unexpected errors
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// });







// await Product.findByIdAndDelete(req.params.id)
// res.json({ message: "Prodcut Delete Success" })

// exports.userCancelOrder = asyncHandler(async (req, res) => {
//     await Order.findByIdAndUpdate(req.params.id, { status: "cancel" })
//     res.json({ message: "User CancelOrder Sucess" })
// })

// exports.SeatBookCancel = asyncHandler(async (req, res) => {
//     await BusSeats.create(req.body)
//     res.status(200).json({ message: "Seat book cancelled" })
// })

// exports.SeatBook = asyncHandler(async (req, res) => {
//     await seat.create(req.body)
//     res.json({ message: "seat book Sucess" })
// })

