
const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config()
const path = require("path")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "dist")))
app.use(cors(
    {
        origin:
            // "https://red-bus-app.onrender.com",
            "http://localhost:5173",
        credentials: true
    }
))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/user", require("./routes/user.routes"))
app.use("/api/bus", require("./routes/bus.routes"))
app.use("/api/route", require("./routes/getbus.routes"))
app.use("/api/seat", require("./routes/busBookSeat"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
    // res.sendFile(path.join(__dirname, "dist", "index.html"))
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "SERVER ERROR" || err.message })
})
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})