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
    const createConnectionTableQuery=`CREATE TABLE IF NOT EXISTS connections(
        connect_id INT AUTO_INCREMENT,
        follower_name VARCHAR(15),
        following_name VARCHAR(15),
        primary key (connect_id)
    );`
    const createPendingConnectionTableQuery=`CREATE TABLE IF NOT EXISTS pendingConnections(
        pending_connect_id INT AUTO_INCREMENT,
        follower_name VARCHAR(15),
        following_name VARCHAR(15),
        primary key (pending_connect_id)
    );`
    
    mysql_pool.query(createUserTableQuery,(error,result,field)=>{
        if(error) console.log(error);
        // console.log("users table created")
    })
    
    mysql_pool.query(createPostTableQuery,(error,result,field)=>{
        if(error) console.log(error);
        // console.log("posts table created")
    })

    mysql_pool.query(createConnectionTableQuery,(error,result,field)=>{
        if(error) console.log(error);
        // console.log("users table created")
    })
    
    mysql_pool.query(createPendingConnectionTableQuery,(error,result,field)=>{
        if(error) console.log(error);
        // console.log("posts table created")
    })
}

module.exports=createTables



