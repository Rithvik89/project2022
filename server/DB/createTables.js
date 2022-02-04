const config=require('../HTTP/config')


const {mysql_pool}=config
function createTables(req,res){
    const createUserTableQuery=`CREATE TABLE IF NOT EXISTS users(
        user_id INT AUTO_INCREMENT,
        username VARCHAR(10),
        password VARCHAR(10),
        email_id VARCHAR(15),
        cric_index INT DEFAULT 0,
        profile_image VARCHAR(100),
        registered_date DATE,
        primary key (user_id)
    );`
    const createPostTableQuery=`CREATE TABLE IF NOT EXISTS posts (
        post_id INT AUTO_INCREMENT,
        username VARCHAR(10),
        content TEXT,
        comments INT DEFAULT 0,
        likes INT DEFAULT 0,
        shares INT DEFAULT 0,
        post_date DATE,
        primary key (post_id)
    );`
    const createConnectionTableQuery=`CREATE TABLE IF NOT EXISTS connections(
        connection_id INT AUTO_INCREMENT,
        fan VARCHAR(15),
        celebrity VARCHAR(15),
        primary key (connection_id)
    );`
    const createPendingConnectionTableQuery=`CREATE TABLE IF NOT EXISTS pendingConnections(
        pending_id INT AUTO_INCREMENT,
        fan VARCHAR(15),
        celebrity VARCHAR(15),
        primary key (pending_id)
    );`
    
    mysql_pool.query(createUserTableQuery,(error,result,field)=>{
        if(error) console.log(error);
    })
    
    mysql_pool.query(createPostTableQuery,(error,result,field)=>{
        if(error) console.log(error);
    })

    mysql_pool.query(createConnectionTableQuery,(error,result,field)=>{
        if(error) console.log(error);
    })
    
    mysql_pool.query(createPendingConnectionTableQuery,(error,result,field)=>{
        if(error) console.log(error);
    })
}

module.exports=createTables



