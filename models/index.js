const mongoose = require("mongoose")
const ParkSchema = require("./Park")

const Park = mongoose.model("Park", ParkSchema)

module.exports = {
  Park,
}
