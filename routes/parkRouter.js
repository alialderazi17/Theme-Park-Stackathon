const express = require("express")
const router = express.Router()
const parkController = require("../controllers/ParkController")

<<<<<<< HEAD
router.get("/", parkController.getAllParks)
// router.get('/new', parkController.showNewParkPage)
router.post("/new", parkController.createPark)
router.get("/:id", parkController.showParkById)
router.delete("/:id", parkController.deletePark)
=======
router.get('/', parkController.getAllParks)
// router.get('/new', parkController.showNewParkPage)
router.post('/new', parkController.createPark)
router.get('/:id', parkController.viewParkById)
router.delete('/:id', parkController.deletePark)
>>>>>>> 047c832518a811ddb13373ab51ca5d1ffb163204

module.exports = router
