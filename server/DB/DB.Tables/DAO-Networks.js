const {QueryAll,Exec,Query}=require('./DB')

const _query={
    GetPending:`SELECT * from pendingConnections WHERE following_name=(?);`,
    GetRecommend:`SELECT * from users;`,
    InitiateConnection:`INSERT INTO pendingConnections (follower_name,following_name)
     VALUES (?,?);`,
    AcceptConnection:`INSERT INTO connections (follower_name,following_name)
    VALUES (?,?);`,
    DropConnection:`DELETE from pendingConnections WHERE follower_name=(?) AND following_name=(?);`
}

// defining function...

function RequestConnection(follower_name,following_name){
    return Exec(_query.InitiateConnection,[follower_name,following_name])
} 

function AcceptConnection(follower_name,following_name){
    return Exec(_query.AcceptConnection,[follower_name,following_name])    
}

function GetPendingNetworks(following_name){
    console.log(following_name,_query.GetPending)
    return QueryAll(_query.GetPending,[following_name])
}

function GetRecommendedNetworks(){
    return QueryAll(_query.GetRecommend)
}

function DropConnectionFromPending(follower_name,following_name){
    return Exec(_query.DropConnection,[follower_name,following_name]) 
}

module.exports={RequestConnection,AcceptConnection,GetPendingNetworks,GetRecommendedNetworks,DropConnectionFromPending}

