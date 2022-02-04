const {QueryAll,Exec,Query}=require('./DB')

const _query={
<<<<<<< HEAD
    GetPending:`SELECT * from pendingConnections WHERE following_id=(?);`,
    GetRecommend:`SELECT * from users;`,
    InitiateConnection:`INSERT INTO pendingConnections (follower_,following_id)
     VALUES (?,?);`,
    AcceptConnection:`INSERT INTO connections (follower_id,following_id)
    VALUES (?,?);`,
    DropConnection:`DELETE from pendingConnections WHERE follower_id=(?) AND following_id=(?);`
=======
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
>>>>>>> 55cd1bbe199e96bad370d73e9eb206c356ab8e7a
}

// defining function...

<<<<<<< HEAD
await function RequestConnection(follower_id,following_id){
    if(typeof(follower_id) != 'number' || typeof(following_id) != 'number') {
        var err = new Error('Invalid Inputs');
        err.srvMessage = "follower_id or following_id is not a number(invalid input) for GetUser By Id";
        err.code = 400;
        throw err;
    }
    try {
        var result = await Exec(_query.InitiateConnection,[follower_id,following_id])
        return result;
    } catch (err) {
        return err;
    }
} 

function AcceptConnection(follower_id,following_id){
    if(typeof(follower_id) != 'number' || typeof(following_id) != 'number') {
        var err = new Error('Invalid Inputs');
        err.srvMessage = "follower_id or following_id is not a number(invalid input) for GetUser By Id";
        err.code = 400;
        throw err;
    }
    try {
        var result = await Exec(_query.AcceptConnection,[follower_id,following_id])
        return result;
    } catch (err) {
        return err;
    }   
}

function GetPendingNetworks(following_id){
    if(typeof(follower_id) != 'number' || typeof(following_id) != 'number') {
        var err = new Error('Invalid Inputs');
        err.srvMessage = "follower_id or following_id is not a number(invalid input) for GetUser By Id";
        err.code = 400;
        throw err;
    }
    try {
        var result = await QueryAll(_query.GetPending,[following_id])
        return result;
    } catch (err) {
        return err;
    }
    
}

function GetRecommendedNetworks(){
    if(typeof(follower_id) != 'number' || typeof(following_id) != 'number') {
        var err = new Error('Invalid Inputs');
        err.srvMessage = "follower_id or following_id is not a number(invalid input) for GetUser By Id";
        err.code = 400;
        throw err;
    }
    try {
        var result = await QueryAll(_query.GetRecommend)
        return result;
    } catch (err) {
        return err;
    }
    
}

function DropConnectionFromPending(follower_id,following_id){
    if(typeof(follower_id) != 'number' || typeof(following_id) != 'number') {
        var err = new Error('Invalid Inputs');
        err.srvMessage = "follower_id or following_id is not a number(invalid input) for GetUser By Id";
        err.code = 400;
        throw err;
    }
    try {
        var result = await Exec(_query.DropConnection,[follower_id,following_id]);
        return result;
    } catch (err) {
        return err;
    }
=======
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
>>>>>>> 55cd1bbe199e96bad370d73e9eb206c356ab8e7a
}

module.exports={RequestConnection,AcceptConnection,GetPendingNetworks,GetRecommendedNetworks,DropConnectionFromPending}

