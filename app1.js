require('dotenv').config();
const express = require('express')
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const app = express()
const Parser = require('body-parser')

const cors = require('cors')
const mongoose = require('mongoose')



const accessLog = fs.createWriteStream(
  path.join(__dirname,'access.log'),{flags:'a'}
)
app.use(Parser.json({extended:false}))
app.use(cors())
app.use(cors({
  origin: '*'
}));
app.use(express.static('public'));



const Signup = require('./route/sign')
app.use(Signup)




mongoose.connect('mongodb+srv://Faiz:Sharpener2023@faizuddin.tyr9tuj.mongodb.net/?retryWrites=true&w=majority').then(result=>{
    console.log("Connected")
    app.listen(3000)
}).catch(err=>{
    console.log(err)
})

