const {
    CreatePost,
    GetAllPosts,
    GetThisPost,
    DeletePost
} = require('../../DB/DB.Tables/DAO-Posts')


async function HandleAddUserPost(req,res,next){
         const {username}=req.credentials
         const {content}=req.body
         try{
            await CreatePost(username,content)
            res.send("Post created successfully")
         }
         catch(err){
            err.code=501
            next(err)
         }
}

async function HandleGetAllPosts(req,res){
        const data=await GetAllPosts()
        res.send(data)
}

async function HandleGetThisPost(req,res){
   const data=await GetThisPost(req.params.id)
   res.send(data)
}

async function HandleDeletePost(req,res){
   await DeletePost(req.params.id)
}



module.exports={HandleAddUserPost,HandleGetAllPosts,HandleGetThisPost,HandleDeletePost}