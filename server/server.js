const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT 
const connectDb = require('./Database/connect')

const app = express()
connectDb()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./Routes/userRoutes'))
app.use('/api/feed',require('./Routes/feedRoutes'))
app.use('/api/community',require('./Routes/communityRoutes'))


app.listen(port,()=>console.log(`Server Active on Port ${port}`))