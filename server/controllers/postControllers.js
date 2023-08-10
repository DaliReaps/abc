const Post=require('../models/postSchema')

const newpost=async(req,res)=>{
    try{
        const {title,desc}=req.body
        const userid=req.body.userid
        const newpost=new Post({title,desc,owner:userid})
        await newpost.save()
        res.status(201).json({msg:"Post created",newpost:newpost})
    }
    catch(error){
        res.status(500).json({msg:"Something went wrong"})
    }
}
const getposts=async(req,res)=>{
    try{

        const posts=await Post.find({owner:req.body.userid}).populate("owner").sort("_createAt")
        res.status(200).json({msg:"Get posts",posts:posts})
    }
    catch(error){
        res.status(500).json({msg:"Something went wrong"})
    }
}

const allposts=async(req,res)=>{
    try{
        const posts=await Post.find().populate("owner").sort("_createAt")
        res.status(200).json({msg:"Get all posts",posts:posts})
    }
    catch(error){
        res.status(500).json({msg:"Something went wrong"})
    }
}

module.exports={newpost,getposts,allposts}