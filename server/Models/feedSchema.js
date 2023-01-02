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
        required:true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    },
    comments:[{type:mongoose.Types.ObjectId,ref:"User",required:true}],
    likes:{
        type:Number,

    },
    tags:{
        type:Array,
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Feed',feedSchema)