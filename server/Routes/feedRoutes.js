const router = require('express').Router()
const {getFeed,postFeed,updateFeed,getById,deleteFeed,getByUserId,addComment,getComments,getCommentByPostId} = require('../Handlers/feedHandlers')
router.get('/',getFeed)
router.post('/addfeed',postFeed)
router.put('/update/:id',updateFeed)
router.get('/:id',getById)
router.delete('/:id',deleteFeed)
router.get('/user/:id',getByUserId)
router.post('/commentfeed/',addComment)
router.get('/comments',getComments)
router.get('/comments/:id',getCommentByPostId)



module.exports = router