const bcrypt = require('bcrypt')
const User = require('../Models/userSchema')

const getUsers = async (req,res,next) => {
  let users;
  try {
    users = await User.find()
  } catch (error) {
    console.log(error)
  }
  if(!users){
    res.status(404).json({message:'no user found'})
  }
  
  return res.status(200).json(users)
}
const register = async (req,res,next) =>{
    const {username,email,password,profileImage,fullName,country,city,age,Bio,followers,following} = req.body
    
    if(!username || !email  || !password){
        res.status(400).send('Please add all fields')
    }
    
    //check if user exists
    const userExists = await User.findOne({email})
    
    if (userExists){
        res.status(400).send('user already exists') 
    
    }
    
    //hashpassord
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt )
    
    //createUser
    const user = await User.create({
        username,
        email,
        password:hashedPassword,
        profileImage,
        fullName,
        country,
        city,
        age,
        Bio,
        followers,
        following,
        feed:[]
    
    })
    
    if(user){
       res.status(201).json({
        _id : user.id,
        name :user.name,
        email : user.email,
        feed : user.feed,
        following:user.following,
        followers:user.followers
        
     
       })}else{
          res.status(400).send('invalid user credentials')
       }
      
    
     
    }
    const loginUser =  async(req,res) => {
        const {email,password,feed} = req.body
        const user = await User.findOne({email})
        if (user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id : user.id,
            username :user.username,
            email : user.email,
          
           
        })
        }else{
            res.status(400).send('invalid user credentials')
        }
    
        res.send("login user")
       }

module.exports ={
    getUsers,
    register,
    loginUser,
}