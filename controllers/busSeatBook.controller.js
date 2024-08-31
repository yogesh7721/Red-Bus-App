

const asyncHandler = require("express-async-handler")
const BusBookSeat = require("../models/BusBookSeat")
const sendEmail = require("../utils/email")

exports.BookSeat = asyncHandler(async (req, res) => {
    const { date, from, to, provider, seats } = req.body
    await BusBookSeat.create({ ...req.body, userId: req.loggedInUser })
    const styledServer = `
    <html>
    <head>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f4;
                color: #333;
            }
            h1 {
                color: #007BFF;
            }
            p {
                font-size: 16px;
                line-height: 1.6;
                color: #555;
            }
            .phone-number {
                background-color: #87CEEB;
                padding: 10px;
                display: inline-block;
                color: white;
            }
            .center-text {
                text-align: left;
            }
            .left-text {
                text-align: left;
            }
            .signature {
                margin-top: 20px;
                font-style: italic;
            }
        </style>
    </head>
    <body>
        <p class="left-text" style="font-weight: bold;">Hello,</p>
        <h4 class="center-text">
        Your Seat Book Is Comform 💐 
        </h4>
        <p class="center-text">
           Date: ${date}
        </p>
        <p class="center-text">
          From: ${from}
        </p>
        <p class="center-text">
         TO: ${to}
        </p>
        <p class="center-text">
         Travels Name: ${provider}
        </p>
        <p class="center-text">
         Seats: ${seats}
        </p>
        <p class="center-text">
            Join the workshop on time. Thank you.
        </p>
    </body>
    </html>`;
    await sendEmail({
        to: "shelkey881@gmail.com",
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
