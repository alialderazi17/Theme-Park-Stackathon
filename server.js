const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const parkRouter = require("./routes/parkRouter")

const PORT = process.env.PORT || 3000

const db = require("./db")
const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/themeparks", parkRouter)

app.get("/", (req, res) => {
  res.send("Server's Running!")
})

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`)
})
