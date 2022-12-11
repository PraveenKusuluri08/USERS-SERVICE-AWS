const router = require("express").Router()
const  Admin = require("../controllers/adminController")

//Admin routes
//TODO:Add middleware function to check the requested user is admin or not

router.post("/createTable",(req, res) => {
  console.log(req.body)
  const { tableName, primaryKey, sortKey } = req.body
  let payload = {
    tableName,
    primaryKey,
    sortKey,
  }
  const obj = new Admin(null)
  obj._create_table(payload).then((msg)=>{
    return res.status(201).json({message:msg})
  }).catch(err=>{
    return res.status(500).json({message:err})
  })
  })

module.exports = router
