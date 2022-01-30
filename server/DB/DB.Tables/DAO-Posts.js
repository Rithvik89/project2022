const {QueryAll,Exec,Query} = require('./DB')

const _query={
    Create: `INSERT INTO posts (username,content) VALUES (?,?) `,
    GetAll: `SELECT * FROM posts`,
    GetPost:`SELECT * FROM posts WHERE post_id=?`,
    Delete: `DELETE FROM posts WHERE post_id=?`,
}

// defining functions 

function CreatePost(username,content){
    return Exec(_query.Create,[username,content])
}

function GetAllPosts(){
    return QueryAll(_query.GetAll)     
}

function GetThisPost(post_id){
   return Query(_query.GetPost,[post_id])
}

function DeletePost(post_id){
   return Exec(_query.Delete,[post_id])
 }

module.exports={GetAllPosts,CreatePost,GetThisPost,DeletePost}



