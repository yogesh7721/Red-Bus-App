

const { mongoose } = require("mongoose")

const authSchema = new mongoose.Schema({

    date: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    provider: { type: String },
    seats: []
})
module.exports = mongoose.model("seats", authSchema)




// const mongoose = require("mongoose")

// const authSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     mobile: { type: String, },
//     active: { type: Boolean, default: true },
//     otp: { type: String, }
// })
// module.exports = mongoose.model("auth", authSchema)
