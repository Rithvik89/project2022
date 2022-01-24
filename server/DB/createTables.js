const config=require('../config')


const {mysql_pool}=config
function createTables(req,res){
    const createUserTableQuery=`CREATE TABLE IF NOT EXISTS user(
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
}

module.exports=createTables



