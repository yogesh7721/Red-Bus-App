

const busSeatBookController = require("../controllers/busSeatBook.controller")

const router = require("express").Router()

router
    .get("/", busSeatBookController.GetBookSeat)
    .post("/book-seat", busSeatBookController.BookSeat)


module.exports = router

