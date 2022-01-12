const express=require('express')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userdetails=require('./models/userdetails')

const jwt_secret='vsidohvWoei;&8%^uhrvewo..nji'

const app=express()
app.use(express.json())

mongoose.connect('mongodb+srv://22yards:rithvik123@22yards.nby6f.mongodb.net/mongofirst?retryWrites=true&w=majority')

console.log(userdetails)

app.post('/register',async (req,res)=>{
    const record=req.body
    const {emailid,username,password}=record
    const hashpassword=await bcrypt.hash(password,5)
    const response=await userdetails.create({emailid,username,password:hashpassword})
    .then(()=>("registration successful"))
    .catch(()=>("registration unsuccessful"))
    res.send(response)
})

app.post('/login',async (req,res)=>{
    const record=req.body
    const {username,password}=record
    const response=await userdetails.findOne({username}).lean()
    console.log(response)
    if(response){
        if(await bcrypt.compare(password,response.password)){
            const token=jwt.sign({id:response._id,username},jwt_secret)
            console.log(token)
            res.send(JSON.stringify({status:'ok',token}))
        }
        else{
            res.send("Password incorrect")
        }
    }
    else{
       res.send("invalid credentials")
    }
})

app.listen(1337,()=>{
    console.log("Server is lisening to 1337")
})