const express=require('express')
const mysql=require('mysql')

const app=express()

const pool=mysql.createPool("mysql://u7dipojfbgepnwbw:UWlkjLp2xL1xCZCSfRIt@b2lrjfmiy7qzs9sc0ge6-mysql.services.clever-cloud.com:3306/b2lrjfmiy7qzs9sc0ge6?connectionLimit=2")

// console.log(connection.threadId)

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});



app.listen(1337)