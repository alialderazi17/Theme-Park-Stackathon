const { Schema, default: mongoose } = require("mongoose")

const parkSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    movie: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Park", parkSchema)
