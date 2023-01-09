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
    posts:{
        type:Array,
        ref:"CommunityPosts",
        required:false},
    members:{
        type:Array,
        ref:"Community",
        required:false},
    user:{
        type:Array,
        ref:"User",
        required:true,
    },
},{
    timestamps:true
})
module.exports = mongoose.model("Community",createCommunitySchema)