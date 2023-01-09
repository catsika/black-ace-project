const router = require('express').Router()
const {getCommunity,addCommunity,updateCommunity,deleteCommunity,addCommunityPost,
    getCommunityPosts,getCommunityById,communityMember} 
= require('../Handlers/communityHandler')

router.get('/community/',getCommunity)
router.get('/community/:id',getCommunityById)
router.post('/community',addCommunity)
router.put('/community/:id',updateCommunity)
router.delete('/community/:id',deleteCommunity)
router.post('/addpost/',addCommunityPost)
router.get('/communityPosts',getCommunityPosts)
router.post('/community/members/',communityMember)

module.exports = router