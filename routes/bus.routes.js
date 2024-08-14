const buscontroller = require("../controllers/buscontroller")


const router = require("express").Router()

router
    .post("/seatbook", buscontroller.SeatBook)


module.exports = router




