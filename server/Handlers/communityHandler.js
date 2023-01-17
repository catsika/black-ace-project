const User = require('../Models/userSchema')
const CreateCom = require('../Models/createCommunity')
const communityPost = require('../Models/communityPost')
const mongoose = require('mongoose')
const Member = require('../Models/comunityMem')

const getCommunity = async (req,res) => {
    
    const communities = await CreateCom.find({community:CreateCom})
    res.status(200).json(communities)
}

const getCommunityById = async (req,res) => {
  const {user} = req.body
  let userCom;
  try {
    userCom = await CreateCom.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!userCom) {
    return res.status(404).json({ message: "No feed Found" });
  }
  return res.status(200).json({ user: userCom });
}



const addCommunity = async (req,res) => {
    const {name,description,posts,members,user} = req.body
    let existingUser;
    try {
      existingUser = await User.findById(user)
    } catch (error) {
      console.log(error)
    }
    if(!existingUser){
      return res.status(400).json({message:"User not found"})
    }

    const community = await new CreateCom({
      name,
      description,
      posts,
      members,
      user

    })

    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await community.save({session})
        existingUser.community.push(community)
        await existingUser.save({session})
        await session.commitTransaction()
     } catch (error) {
         console.log(error)
         res.status(400).json({error:error})
     }
     return res.status(201).json(community)
}

const updateCommunity = async (req,res) => {
  const {name,description} = req.body
  const comId = req.params.id
let community;
try {
   community = await CreateCom.findByIdAndUpdate(comId,{
  name,
  description
 
})
} catch (error) {
console.log(error)    
}
if(!community){
  return res.status(500).send('unable to update')
}
res.status(200).json(community)
}
const deleteCommunity = async (req,res) => {
  const id = req.params.id;
  
  let community;
  try {
    community = await CreateCom.findByIdAndRemove(id).populate("user");
    await community.user.community.pull(community);
    await community.user.save();
  } catch (err) {
    console.log(err);
  }
  if (!community) {
    return res.status(500).json({ message: "Unable To Delete" });
  }
  return res.status(200).json({ message: "Successfully Deleted" })
}

//community posts
const getCommunityPosts = async (req,res) => {
  const comPosts = await communityPost.find({community:communityPost})
res.status(200).json(comPosts) 
}

const addCommunityPost = async (req,res) => {
  const {title,body,image,com} = req.body
  let communityUser;
  try {
    communityUser = await CreateCom.findById(com)
  } catch (error) {
    console.log(error)
  }
  if(!communityUser){
    return res.status(400).json({message:"community not found"})
  }

  const post = new communityPost({
title,
body,
image,
com

  })

  try {
      const session = await mongoose.startSession()
      session.startTransaction()
      await post.save({session})
      communityUser.posts.push(post)
      await communityUser.save({session})
      await session.commitTransaction()
   } catch (error) {
       console.log(error)
       res.status(400).json({error:error})
   }
   return res.status(201).json(post)
}

const communityMember = async (req,res) => {
  const {name,user} = req.body

  let communitymember;
  try{
    communitymember = await CreateCom.findById(name) 
  }catch (error){
    console.log(error)
   
  }
  if(!communitymember){
    return res.status(404).json({message:"community not found"})
  }

  const members = new Member({
    //name refers to the community's name
    name,
    //user refers to the name of the member of the community
    user
  })
  const member = members.user

  try {
    const session = await mongoose.startSession()
    session.startTransaction()
    await members.save({session})
    communitymember.members.push(member)
    await communitymember.save({session})
    await session.commitTransaction()
 } catch (error) {
     console.log(error)
     res.status(400).json({error:error})
 }
 return res.status(201).json(members)
}

module.exports = {
getCommunity,
getCommunityById,
addCommunity,
updateCommunity,
deleteCommunity,
addCommunityPost,
getCommunityPosts,
communityMember,

}