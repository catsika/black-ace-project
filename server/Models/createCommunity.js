const mongoose = require('mongoose')

const createCommunitySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    posts:[{type:mongoose.Types.ObjectId,ref:"CommunityPosts",required:false}],
    members:[{type:mongoose.Types.ObjectId,ref:"Community",required:false}],
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    },
},{
    timestamps:true
})
module.exports = mongoose.model("Community",createCommunitySchema)