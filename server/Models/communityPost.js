const mongoose = require('mongoose')

const communityPostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    com:{
        type:Array,
        ref:"Community",
        required:true,
    },
},{
    timestamps:true
})
module.exports = mongoose.model("CommunityPost",communityPostSchema)