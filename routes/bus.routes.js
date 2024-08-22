
const buscontroller = require("../controllers/buscontroller")

const router = require("express").Router()

router
    //  Admin client
    .get("/allseatBook-Admin", buscontroller.getAllSeatBookAdminData)
    .post("/seatBook-admin", buscontroller.SeatBook)
    .delete("/adminSeat-delete/:id", buscontroller.AdminSeatDelete)
    .put("/adminSeat-cancel/:id", buscontroller.SeatBookCancle)


    // mobile
    .get("/fetch-seat-data", buscontroller.getAllSeatBookUserData)

module.exports = router