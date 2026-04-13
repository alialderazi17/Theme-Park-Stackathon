const { Park } = require("../models")

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
    const park = await Park.findById({})
    res.status(200).send(park)
  } catch (error) {
    console.error("⚠️ An Error occurred viewing Park!", error.message)
  }
}

module.exports = {
  getAllParks,
  viewParkById,
}
