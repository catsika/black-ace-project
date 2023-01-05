const mongoose = require('mongoose')
const User = require('../Models/userSchema')
const Feed = require('../Models/feedSchema')
const Comment = require('../Models/comment')



const getFeed = async (req,res) => {
    let feeds;
    try {
        feeds = await Feed.find()
      } catch (error) {
        console.log(error)
      }
      if(!feeds){
        res.status(404).json({message:'No Post found'})
      }
      return res.status(200).json(feeds)
}
const postFeed = async (req,res) => {
    const {title,description,image,user,comments,likes,tags,} = req.body

    let existingUser;
    try {
      existingUser = await User.findById(user)
    } catch (error) {
      console.log(error)
    }
    if(!existingUser){
      return res.status(400).json({message:"User not found"})
    }

    const feed = await new Feed({
        title,
        description,
        image,
        user,
        comments,
        likes,
        tags
    })

    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await feed.save({session})
        existingUser.feed.push(feed)
        await existingUser.save({session})
        await session.commitTransaction()
     } catch (error) {
         console.log(error)
         res.status(400).json({error:error})
     }
     return res.status(201).json(feed)
}
const updateFeed = async (req,res) =>{
    const {title,description} = req.body
    const feedId = req.params.id
let feed;
try {
     feed = await Feed.findByIdAndUpdate(feedId,{
    title,
    description
   
})
} catch (error) {
console.log(error)    
}
if(!feed){
    return res.status(500).send('unable to update')
}
res.status(200).json(feed)
}

const getById = async (req,res,next) => {
    const id = req.params.id
    const feed = await Feed.findById({_id:id})
    if (!feed){
      return res.status(404).json({message:"feed not found"})
    }else{
      res.status(200).json(feed)
    }

}
const deleteFeed = async (req,res,next) => {
    const id = req.params.id;
  
    let feed;
    try {
      feed = await Feed.findByIdAndRemove(id).populate("user");
      await feed.user.feed.pull(feed);
      await feed.user.save();
    } catch (err) {
      console.log(err);
    }
    if (!feed) {
      return res.status(500).json({ message: "Unable To Delete" });
    }
    return res.status(200).json({ message: "Successfully Deleted" })
  }

  const getByUserId = async (req,res) => {
    const userId = req.params.id;
    let userFeed;
    try {
      userFeed = await User.findById(userId).populate("feed");
    } catch (err) {
      return console.log(err);
    }
    if (!userFeed) {
      return res.status(404).json({ message: "No feed Found" });
    }
    return res.status(200).json({ user: userFeed });
  }
  const addComment = async (req,res) => {
  const {text,post} = req.body
  let feeds;
  try {
    feeds = await Feed.findById(post)
  } catch (error) {
    console.log(error)
  }
  if(!feeds){
    return res.status(400).json({message:"post not found"})
  }

  const comment = await new Comment({
    text,
    post
  })

  try {
    const session = await mongoose.startSession()
    session.startTransaction()
    await comment.save({session})
    feeds.comments.push(comment)
    await feeds.save({session})
    await session.commitTransaction()
 } catch (error) {
     console.log(error)
     res.status(400).json({error:error})
 }
 return res.status(201).json(comment)
  }
  const getComments = async (req, res) => {
  const comments = await Comment.find({comment:Comment})
  res.status(200).json(comments)
  };
  

module.exports = {
    getFeed,
   postFeed,
   updateFeed,
   getById,
   deleteFeed,
   getByUserId,
   addComment,
   getComments
}