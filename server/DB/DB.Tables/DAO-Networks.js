const {QueryAll,Exec,Query}=require('./DB')

const _query={
    GetPending:`SELECT * from pendingConnections WHERE following_id=(?);`,
    GetRecommend:`SELECT * from users;`,
    InitiateConnection:`INSERT INTO pendingConnections (follower_,following_id)
     VALUES (?,?);`,
    AcceptConnection:`INSERT INTO connections (follower_id,following_id)
    VALUES (?,?);`,
    DropConnection:`DELETE from pendingConnections WHERE follower_id=(?) AND following_id=(?);`
}

// defining function...

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
}

module.exports={RequestConnection,AcceptConnection,GetPendingNetworks,GetRecommendedNetworks,DropConnectionFromPending}

