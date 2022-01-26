const config=require('../HTTP/config')


const {mysql_pool}=config
function createTables(req,res){
    const createUserTableQuery=`CREATE TABLE IF NOT EXISTS users(
        username VARCHAR(10),
        password VARCHAR(10),
        email_id VARCHAR(15),
        primary key (username)
    );`
    const createPostTableQuery=`CREATE TABLE IF NOT EXISTS posts (
        post_id INT AUTO_INCREMENT,
        username VARCHAR(10),
        content TEXT,
        primary key (post_id)
    );`
    
    mysql_pool.query(createUserTableQuery,(error,result,field)=>{
        if(error) console.log(error);
        console.log("users table created")
    })
    
    mysql_pool.query(createPostTableQuery,(error,result,field)=>{
        if(error) console.log(error);
        console.log("posts table created")
    })
}

module.exports=createTables



