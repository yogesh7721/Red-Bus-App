

const busSeatBookController = require("../controllers/busSeatBook.controller")
const { userProtected } = require("../middleware/protected")

const router = require("express").Router()

router
    .get("/get-book-seat", busSeatBookController.GetBookSeat)
    .post("/book-seat", userProtected, busSeatBookController.BookSeat)

module.exports = router

