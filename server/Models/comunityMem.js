const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name:{
        type:Array,
        ref:"Community",
    required:true
},
    user:{
        type:Array,
        ref:"User",
    required:true
}
})
module.exports = mongoose.model("Member",memberSchema)