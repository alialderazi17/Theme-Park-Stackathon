const { Schema } = require('mongoose')

const ParkSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    movie: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = ParkSchema
