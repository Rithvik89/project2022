const {
  RequestConnection,
  AcceptConnection,
  GetPendingNetworks,
  GetRecommendedNetworks,
  DropConnectionFromPending
}= require('../../DB/DB.Tables/DAO-Networks')

async function ViewNetworkSection(req,res,next){
    const {username}=req.credentials
    console.log(username)
    try{
       const pending=await GetPendingNetworks(username)
       const recommend=await GetRecommendedNetworks()
       res.send({pending,recommend})
    }
    catch(err){
        err.code=501
        next(err)
    }
}

async function PendingRequest(req,res,next){
     const {username}=req.credentials
     const {following}=req.body

     try{
        await RequestConnection(username,following);
        res.send("request sent Successfully")
     }
     catch(err){
        err.code=501
        next(err)
     }
}

async function NewConnectionMade(req,res,next){
    const {username}=req.credentials
    const {following}=req.body

    try{
        // Accept the connection...
       await AcceptConnection(username,following);
       // drop that conection from pending table.....
       await DropConnectionFromPending(username,following);
       res.send("Connection Made succesfully")
    }
    catch(err){
       err.code=501
       next(err)
    }
}

module.exports={ViewNetworkSection,PendingRequest,NewConnectionMade}