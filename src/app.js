require('dotenv').config()
const express = require("express");
const postRoute=require("./routes/post.routes")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



app.get('/',(req,res)=>{
   res.send("The server is in development")
})


app.use("/posts",postRoute)

module.exports = app