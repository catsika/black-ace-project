const router = require('express').Router()
const {getCommunity,addCommunity,updateCommunity,deleteCommunity,addCommunityPost,getCommunityPosts} 
= require('../Handlers/communityHandler')

router.get('/community/',getCommunity)
router.post('/community',addCommunity)
router.put('/community/:id',updateCommunity)
router.delete('/community',deleteCommunity)
router.post('/addpost/',addCommunityPost)
router.get('/communityPosts',getCommunityPosts)

module.exports = router