const express = require("express")
const router = express.Router()
const parkController = require("../controllers/ParkController")

router.get("/", parkController.getAllParks)
// router.get('/new', parkController.showNewParkPage)
router.post("/new", parkController.createPark)
router.get("/:id", parkController.viewParkById)
router.delete("/:id", parkController.deletePark)

module.exports = router
