

const mongoose = require("mongoose")

const busBookSeatSchema = new mongoose.Schema({

    date: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    provider: { type: String },
    seats: { type: [String] },
    busId: { type: String, require: true },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "user"
    }
})
module.exports = mongoose.model("BookSeats", busBookSeatSchema)

