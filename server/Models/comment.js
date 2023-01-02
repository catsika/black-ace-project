const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    post:{
        type:mongoose.Types.ObjectId,
        ref:"Feed",
        required:true,
    },
},{
    timestamps:true
})
module.exports = mongoose.model('Comment',commentSchema)