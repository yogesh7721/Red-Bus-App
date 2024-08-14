
const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.static("dist"))
app.use(cors(
    {
        origin: true,
        credentials: true
    }
))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/bus", require("./routes/bus.routes"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "SERVER ERROR" })
})
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})