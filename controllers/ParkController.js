const Park = require("../models/Park")

const getAllParks = async (req, res) => {
  try {
    const parks = await Park.find({})
    res.status(200).send(parks)
    console.log(parks)
  } catch (error) {
    console.error("⚠️ An Error occurred getting All Parks!!!", error.message)
  }
}

const viewParkById = async (req, res) => {
  try {
    const park = await Park.findById(req.params.id)
    res.status(200).send(park)
  } catch (error) {
    console.error("⚠️ An Error occurred viewing Park!", error.message)
  }
}

const createPark = async (req, res) => {
  try {
    const newPark = await Park.create({
      name: req.body.name,
      image: req.body.image,
      movie: req.body.movie,
      description: req.body.description,
    })

    res.status(201).send(newPark)
  } catch (error) {
    console.error("⚠️ Error creating park!", error.message)
  }
}

const deletePark = async (req, res) => {
  try {
    await Park.findByIdAndDelete(req.params.id)
    res.status(200).send({ message: "Park deleted successfully" })
  } catch (error) {
    console.error("⚠️ Error deleting park!", error.message)
  }
}

module.exports = {
  getAllParks,
  viewParkById,
  createPark,
  deletePark,
}
