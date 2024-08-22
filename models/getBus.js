


const mongoose = require("mongoose")

const authSchema = mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    date: { type: String, required: true },
})
module.exports = mongoose.model("getbus", authSchema)
