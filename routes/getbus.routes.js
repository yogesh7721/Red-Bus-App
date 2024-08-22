const getbusController = require("../controllers/getbus.controller")

const router = require("express").Router()

router
    .post("/Add-Route", getbusController.AddRoute)


module.exports = router             