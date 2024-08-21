
const buscontroller = require("../controllers/buscontroller")

const router = require("express").Router()

router
    // .get("/seatbook-user", buscontroller.getAllSeatBook)
    // .post("/allseatBook-user", buscontroller.SeatBook)
    // .delete("/adminSeat-delete/:id", buscontroller.AdminSeatDelete)
    // .put("/adminSeat-cancel/:id", buscontroller.SeatBookCancle)


    .get("/fetch-seat-data", buscontroller.getAllSeatBook)

module.exports = router