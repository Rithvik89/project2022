const {CreateUser,GetUser,GetAllUsers}=require('../DB/DB.Tables/DAO-userdetails')

async function userRegister (req,res){
    const {username,password,email_id}=req.body
    try{
        await CreateUser(username,password,email_id)
        res.send("Registered sucessfully")
    }
    catch(err){
        res.send("registration Failed")
    }
}

async function userLogin(req,res){
    const {username,password}=req.body
    try{
       const data=await GetUser(username) 
        if(password===data[0].password){
            const token=jwt.sign({username,password},SecretKey)
            res.send(token)
        }
        else{
            res.send("Invalid Credentials")
        }
    }
    catch(err){
       res.send("invalid credentials")
    }
}

async function getRegisteredUsers(req,res){
    const data=await GetAllUsers()
    res.send(data)
}

module.exports={userRegister,userLogin,getRegisteredUsers}
