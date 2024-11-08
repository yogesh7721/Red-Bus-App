


const mongoose = require("mongoose")

const authSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String, },
    active: { type: Boolean, default: true },
    otp: { type: String },
    role: { type: String, default: "user" }

})
module.exports = mongoose.model("user", authSchema)
