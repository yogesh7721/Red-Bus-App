
const buscontroller = require("../controllers/buscontroller")

const router = require("express").Router()

router
    .post("/seatbook-user", buscontroller.SeatBook)
    .post("/allseatBook-user", buscontroller.getAllSeatBook)
    .delete("/adminSeat-delete/:id", buscontroller.AdminSeatDelete)
    .put("/adminSeat-cancel/:id", buscontroller.SeatBookCancle)

module.exports = router