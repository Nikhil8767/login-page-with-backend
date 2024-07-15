const express =require("express");
const app=express()
const dotenv=require("dotenv")
const connectdatabase=require("./public/db/conn.js")
const User = require("./public/db/schema.js")
dotenv.config()

app.use(express.json());

connectdatabase()

app.get("/",(req,res)=>{
    res.send("hi")
})

app.post("/user",async(req,res)=>{
  const {username,number} = req.body;
    const user = await User.create({
        username:username,
        number:number
    })
    res.json({user})
})

app.get("/user",(req,res)=>{
    const user=User.find()
    .then(user=>res.json(user))
    .catch(err=>res.json({msg:"an error has happend"}))
})


app.listen(process.env.PORT)