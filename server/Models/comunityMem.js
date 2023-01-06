const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name:[{type:mongoose.Types.ObjectId,ref:"Community",required:true}],
    user:[{type:mongoose.Types.ObjectId,ref:"User",required:true}]
})
module.exports = mongoose.model("Member",memberSchema)