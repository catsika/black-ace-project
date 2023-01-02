const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT 
const connectDb = require('./Database/connect')

const app = express()
connectDb()

app.use(express.json())
app.use(express.urlencoded({extended:false}))




app.listen(port,()=>console.log(`Server Active on Port ${port}`))