const {QueryAll,Exec,Query} = require('./DB')

const _query = {
    Create: `INSERT INTO userdetails (username,password,email_id) VALUES (?,?,?) `,
    GetAll: `SELECT * FROM userdetails`,
    GetUser:`SELECT * FROM userdetails WHERE username=?`,
    Delete: `DELETE FROM userdetails WHERE user_id=$1`,
  };

// defining my functions

function CreateUser(username,password,email_id){
    return Exec(_query.Create,[username,password,email_id])
}

function GetAllUsers(){
    return QueryAll(_query.GetAll)
     
}

function GetUser(username){
   return Query(_query.GetUser,[username])
}

module.exports={GetAllUsers,CreateUser,GetUser}

