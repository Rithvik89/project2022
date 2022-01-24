const {QueryAll,Exec,Query} = require('./DB')

const _query = {
    Create: `INSERT INTO users (username,password,email_id) VALUES (?,?,?) `,
    GetAll: `SELECT * FROM users`,
    GetUser:`SELECT * FROM users WHERE username=?`,
    Delete: `DELETE FROM users WHERE user_id=?`,
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

function DeleteUser() {
    
}

module.exports={GetAllUsers,CreateUser,GetUser}
