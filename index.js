const express = require("express")
require("dotenv").config()
const AWS = require("aws-sdk")

const app = express()

AWS.config.update({
  region: "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})
app.use(express.json())
app.use("/admin", require("./routes/adminRoutes"))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App is listining on port ${PORT}`)
})
