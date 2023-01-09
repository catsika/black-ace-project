const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true 
    },
    profileImage:{
        type:String,
        required:false,
        default: 'https://w7.pngwing.com/pngs/529/816/png-transparent-computer-icons-user-profile-avatar-heroes-monochrome-black-thumbnail.png'
    },
    Bio:{
        type:String,
        required:false   
    },
 
    city:{
        type:String,
        required:false 
    },
    birthDate:{
        type:String,
        required:false 
    },
    feed:{
        type:Array,
        ref:"Feed",
        required:false
    },

    followers:{
        type:Array,
        ref:"User",
        required:false
    },
    following:{
        type:Array,
        ref:"User",
        required:false
    },

    community:{
        type:Array,
        ref:"Community",
        required:false
    },
},{
    timestamps:true
})
module.exports=mongoose.model('User',userSchema)