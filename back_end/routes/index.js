const express = require('express')
const router = express.Router()
const registerController = require("../controllers/register-controller")
const loginController = require("../controllers/login-controller")
const authenticateToken = require('../middlewares/authen-middleware')

router.post("/api/register",registerController.register)
router.post("/api/login",loginController.login)
router.get("/api/checktoken",authenticateToken,(req, res)=>{
    res.send("Authenticated users")
})

module.exports = router