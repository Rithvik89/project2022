const express=require('express')
const jwt=require('jsonwebtoken')
const {GetAllUsers,CreateUser,GetUser} =require('./DB/DB.Tables/DAO-userdetails')
const {GetAllPosts,CreatePost,GetPost} =require('./DB/DB.Tables/DAO-Posts')
const {userRegister,userLogin,getRegisteredUsers}=require('./Controllers/userController')
const config=require('./config')
const app=express()

app.use(express.json())

const SecretKey="nvr84t@90u4*&%>neuh"
const {mysql_pool}=config

const createUserTableQuery=`CREATE TABLE IF NOT EXISTS userdetails (
    username VARCHAR(10),
    password VARCHAR(10),
    email_id VARCHAR(15),
    UNIQUE (username)
);`
const createPostTableQuery=`CREATE TABLE IF NOT EXISTS posts (
    post_id INT AUTO_INCREMENT,
    username VARCHAR(10),
    content TEXT,
    UNIQUE (post_id)
);`

mysql_pool.query(createUserTableQuery,(error,result,field)=>{
    if(error) console.log(error);
})

mysql_pool.query(createPostTableQuery,(error,result,field)=>{
    if(error) console.log(error);
})


app.post('/register', userRegister)

app.post('/login',userLogin)

app.get('/register',getRegisteredUsers)

app.post('/feed',async(req,res)=>{
     const {token,content}=req.body
     const {username,password}=jwt.verify(token,SecretKey)
     try{
        await CreatePost(username,content)
        res.send("Post created successfully")
     }
     catch(err){
        res.send("Post Creation failed")
     }
})

app.get('/feed',async(req,res)=>{
    const data=await GetAllPosts()
    res.send(data)
})

app.get('/feed/:id',async(req,res)=>{
    const {id}=req.params 
})



app.listen(1337,function(){
    console.log("Iam running on port 1337");
})
