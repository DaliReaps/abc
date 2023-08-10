const express=require('express')
const router=express.Router()
const authmidlleware=require("../middleware/authmidlleware")
const {register,login,getuserinfo}=require('../controllers/userControllers')
router.post('/register',register)
router.post('/login',login)
router.get('/get',authmidlleware,getuserinfo)



module.exports=router