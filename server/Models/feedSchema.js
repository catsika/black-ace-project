const mongoose = require('mongoose')

const feedSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:false,
    },
    user:{
        type:Array,
        ref:"User",
        required:true,
    },
    comments:{
        type: Array,
        ref:"User",
       required:false
    },

    likes:{
        type:Number,

    },
    tags:{
        type:Array,
        ref:"User",
        required:false,
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Feed',feedSchema)