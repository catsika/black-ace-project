const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:false
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
    country:{
        type:String,
        required:false 
    },
    city:{
        type:String,
        required:false 
    },
    age:{
        type:Number,
        required:false 
    }
},{
    timestamps:true
})
module.exports=mongoose.model('User',userSchema)