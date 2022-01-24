const {
    CreatePost,
    GetAllPosts,
    GetPost
} = require('../DB/DB.Tables/DAO-Posts')

async function HandleAddUserPost(req,res){
         const {token,content}=req.body
         const {username,password}=jwt.verify(token,SecretKey)
         try{
            await CreatePost(username,content)
            res.send("Post created successfully")
         }
         catch(err){
            res.send("Post Creation failed")
         }
}

async function HandleGetUsersPosts(req,res){
        const data=await GetAllPosts()
        res.send(data)
}

async function HandleGetUserPost(req,res){
        const {id}=req.params 
}

module.exports={HandleAddUserPost,HandleGetUserPost,HandleGetUserPost}