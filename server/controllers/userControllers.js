const User=require('../models/userSchema')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const register=async(req,res)=>{
    try {
        const {email,password,age}=req.body
        const existuser=await User.findOne({email:email})
      if (existuser){
        res.status(400).json({msg:"this email already exist"})
      } 
       else{
        const hashPW=await bcrypt.hash(password,10)
        const user=await User.create({email,age,password:hashPW})
        const token=jwt.sign({id:user._id},process.env.JWT,{expiresIn:"7d"})
        res.status(201).json({msg:"Succefully created",user:user,token:token})
       }
        
       
       
    } catch (error) {
        res.status(500).json({msg:"Something went wrong",err:error})
    }

}


const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const existuser=await User.findOne({email:email})
      if (!existuser){
        res.status(400).json({msg:"Email not found,make sure to register"})
      } 
       else{
        const checkPW=await bcrypt.compare(password,existuser.password)
      if(!checkPW){
        res.status(400).json({msg:"Wrong password,Try again"})
      }

      else{
        const token=jwt.sign({id:existuser._id},process.env.JWT,{expiresIn:"7d"})
        res.status(200).json({msg:"Succefully login",user:existuser,token:token})
      }
      
       }
        
       
       
    } catch (error) {
        res.status(500).json({msg:"Something went wrong",err:error})
    }

}


const getuserinfo=async(req,res)=>{
    try {
       const personId=req.body.userid
       const user=await User.findById({_id:personId})
            if(user){
                res.status(200).json({msg:"Get user",user:user})
            }
            else{
                res.status(404).json({msg:"no user found"})
            }
        
       }
    catch (error) {
        res.status(500).json({msg:"Something went wrong",err:error})
    }

}


module.exports={register,login,getuserinfo}