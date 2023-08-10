const express=require('express')
const router=express.Router()
const authmidlleware=require("../middleware/authmidlleware")
const {newpost,getposts,allposts}=require('../controllers/postControllers')


router.post('/newpost',authmidlleware,newpost)
router.get('/getpost',authmidlleware,getposts)
router.get('/allpost',allposts)





module.exports=router