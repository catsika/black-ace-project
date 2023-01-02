const mongoose = require('mongoose')

const feedSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:false,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    },
    comments:[{type:mongoose.Types.ObjectId,ref:"User",required:false}],
    likes:{
        type:Number,

    },
    tags:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:false,
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Feed',feedSchema)