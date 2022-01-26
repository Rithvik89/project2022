const mysql=require('mysql2')

const config={
    mysql_pool:mysql.createPool(
        {
            host:"localhost",
            port:3306,
            user:"root",
            password:"nitwarangal@3",
            database:'22yards'
        }
    )   
}

module.exports=config