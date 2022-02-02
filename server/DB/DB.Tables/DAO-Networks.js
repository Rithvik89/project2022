const {QueryAll,Exec,Query}=require('./DB')

const _query={
    GetPending:`SELECT * from pendingConnections WHERE celebrity=(?);`,
    GetRecommend:`select * from users
        where NOT username IN (
            select fan from connections where celebrity=(?) 
            union
            select celebrity from connections where fan=(?)
            union
            select fan from pendingconnections where celebrity=(?)
            union
            select celebrity from pendingconnections where fan=(?))
        order by cric_index desc`,
    InitiateConnection:`INSERT INTO pendingConnections (fan,celebrity)
     VALUES (?,?);`,
    AcceptConnection:`INSERT INTO connections (fan,celebrity)
    VALUES (?,?);`,
    DropConnection:`DELETE from pendingConnections WHERE fan=(?) AND celebrity=(?);`
}

// defining function...

function RequestConnection(fan,celebrity){
    return Exec(_query.InitiateConnection,[fan,celebrity])
} 

function AcceptConnection(fan,celebrity){
    return Exec(_query.AcceptConnection,[fan,celebrity])    
}

function GetPendingNetworks(celebrity){
    return QueryAll(_query.GetPending,[celebrity])
}

function GetRecommendedNetworks(user){
    return QueryAll(_query.GetRecommend,[user,user,user,user])
}

function DropConnectionFromPending(fan,celebrity){
    return Exec(_query.DropConnection,[fan,celebrity]) 
}

module.exports={RequestConnection,AcceptConnection,GetPendingNetworks,GetRecommendedNetworks,DropConnectionFromPending}

