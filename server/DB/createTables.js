const config=require('../HTTP/config')


const {mysql_pool}=config
function createTables(req,res){
    const createUserTableQuery=`CREATE TABLE IF NOT EXISTS users(
        user_id INT AUTO_INCREMENT,
        username VARCHAR(20) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email_id VARCHAR(40) NOT NULL,
        cric_index INT DEFAULT 0,
        profile_image TEXT,
        created_at DATE NOT NULL,
        primary key (user_id)
    );`
    const createPostTableQuery=`CREATE TABLE IF NOT EXISTS posts (
        post_id INT AUTO_INCREMENT,
        user_id INT NOT NULL,
        content TEXT NOT NULL,
        comments INT DEFAULT 0,
        likes INT DEFAULT 0,
        shares INT DEFAULT 0,
        created_at DATE NOT NULL,
        primary key (post_id)
    );`
    const createConnectionTableQuery=`CREATE TABLE IF NOT EXISTS connections(
        connection_id INT AUTO_INCREMENT,
        fan INT NOT NULL,
        celebrity INT NOT NULL,
        primary key (connection_id)
    );`
    const createPendingConnectionTableQuery=`CREATE TABLE IF NOT EXISTS pendingConnections(
        pending_id INT AUTO_INCREMENT,
        fan INT NOT NULL,
        celebrity INT NOT NULL,
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



