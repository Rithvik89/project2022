const mysql=require('mysql')

const config={
    mysql_pool:mysql.createPool(
        {
            limit:10,
            host:"mysql-66575-0.cloudclusters.net",
            port:10738,
            user:"admin",
            password:"SvMsKRpl",
            database:'22yards'
        }
    )   
}

module.exports=config