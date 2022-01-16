const express=require('express')
const mysql=require('mysql')

const app=express()

// Establish a Connection...
const pool=mysql.createPool('mysql://u7dipojfbgepnwbw:UWlkjLp2xL1xCZCSfRIt@b2lrjfmiy7qzs9sc0ge6-mysql.services.clever-cloud.com:3306/b2lrjfmiy7qzs9sc0ge6')

app.get('/register',(req,res)=>{
    const dbquery=`select aa from userdetails;`
    pool.query(dbquery, function (error, results, fields) {
          res.send(results[0]);
        });
})

app.listen(1337,function(){
    console.log("Iam running on port 1337");
})
