const router = require('express').Router()
const {getUsers,register,loginUser} =  require('../Handlers/userHandler')
const {verify} = require('../Middlewares/verify')

router.get('/',getUsers)
router.post('/register',register)
router.post('/login',loginUser)

module.exports = router