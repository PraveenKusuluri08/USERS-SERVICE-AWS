const router = require("express").Router()
const { createTable } = require("../utils/config")

//Admin routes
//TODO:Add middleware function to check the requested user is admin or not

router.post("/createTable", (req, res) => {
  console.log(req.body)
  const { tableName, primaryKey, sortKey } = req.body
  let payload = {
    tableName,
    primaryKey,
    sortKey,
  }
  let msg = createTable(payload)
  if (msg) {
    return res.status(201).json({ message: msg })
  } else {
    return res
      .status(500)
      .json({ message: "Failed to create table! Table is already exists" })
  }
})

module.exports = router
