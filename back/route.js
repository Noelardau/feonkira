const express = require("express")
const bdd = require("./bdd")
const User = require("./core/User")
const router = express.Router()



router.get("/test",(req,res)=>{
        res.send("test 1 2 1 2")
})



// user route


router.post("/signUpUser",(req,res)=>{
   new User(bdd).signUp(res,req.body)


})

router.post("/connectUser",(req,res)=>{
        new User(bdd).logIn(res,req.body)
})






module.exports = {router,express}