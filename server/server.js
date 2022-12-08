const express=require("express");
require('dotenv').config()

const app=express()

let cors = require('cors')
//for resource sharing
app.use(cors())

const route=require("./route")


app.use("/repo",route)




app.listen(8001,()=>console.log("server is started"))