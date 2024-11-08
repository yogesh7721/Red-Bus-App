

const asyncHandler = require("express-async-handler")
const BusBookSeat = require("../models/BusBookSeat")
const sendEmail = require("../utils/email")
const User = require("../models/User")

exports.BookSeat = asyncHandler(async (req, res) => {
    const { date, from, to, provider, seats } = req.body
    await BusBookSeat.create({ ...req.body, userId: req.loggedInUser })
    const userDetail = await User.findById(req.loggedInUser).exec()
    console.log("username", userDetail);

    const styledServer = `
<html>
     <body>
        <p class="left-text" style="font-weight: bold;">Hello, ${userDetail.name}</p>
        <h3 class="center-text">
        Your Seat Book Is Comform 💐 
        </h3>
        <p class="center-text">
           Date: ${date}
        </p>
        <p class="center-text">
          From: ${from}
        </p>
        <p class="center-text">
         To: ${to}
        </p>
        <p class="center-text">
         Travels Name: ${provider}
        </p>
        <p class="center-text">
         Seats: ${seats}
        </p>
        <p class="center-text">
           Thank you.
        </p>
    </body>
    </html>`;
    await sendEmail({
        to: userDetail.email,
        html: styledServer,
        subject: "Seat Book Confirms"
    })
    // await sendEmail({
    //     to: "shelkey881@gmail.com",
    //     message: `<h1>Your Seat Book Is Success</h1>`,
    //     subject: "Seat Book Confirms"
    // })
    res.json({ message: "Seat Book Success...." })
})
exports.GetBookSeat = asyncHandler(async (req, res) => {
    const result = await BusBookSeat.find()
    res.json({ message: "Seat Book Fetfch Success....", result })
})
