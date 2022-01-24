const express=require('express')
const jwt=require('jsonwebtoken')
const config=require('./config')
const createTables=require('./DB/createTables')
const { init } = require('express/lib/application')


const ServerInit = require('./HTTP/ServerInit')
const routeInit = require('./HTTP/RouteInit')
const SinkErrorFor = require('./HTTP/ErrorSinkInit');  



// const conf = Conf
const app = ServerInit();
createTables();
routeInit(app);
SinkErrorFor(app);

















// const app=express()

// app.use(express.json())

// const SecretKey="nvr84t@90u4*&%>neuh"
// const {mysql_pool}=config




// app.post('/register', userRegister)

// app.post('/login',userLogin)

// app.get('/register',getRegisteredUsers)

// app.post('/feed',async(req,res)=>{
//      const {token,content}=req.body
//      const {username,password}=jwt.verify(token,SecretKey)
//      try{
//         await CreatePost(username,content)
//         res.send("Post created successfully")
//      }
//      catch(err){
//         res.send("Post Creation failed")
//      }
// })

// app.get('/feed',async(req,res)=>{
//     const data=await GetAllPosts()
//     res.send(data)
// })

// app.get('/feed/:id',async(req,res)=>{
//     const {id}=req.params 
// })



// app.listen(1337,function(){
//     console.log("Iam running on port 1337");
// })