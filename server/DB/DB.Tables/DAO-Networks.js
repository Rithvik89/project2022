const {QueryAll,Exec,Query}=require('./DB')

const _query={

    GetPending:`select * from users
      where user_id IN (
        select fan from pendingconnections WHERE celebrity=(?)
      )`,


    GetRecommend:`select * from users
        where NOT user_id IN (
            select user_id from users where user_id=(?)
            union
            select fan from connections where celebrity=(?) 
            union
            select celebrity from connections where fan=(?)
            union
            select fan from pendingconnections where celebrity=(?)
            union
            select celebrity from pendingconnections where fan=(?))`,
    InitiateConnection:`INSERT INTO pendingConnections (fan,celebrity)
     VALUES (?,?);`,
    AcceptConnection:`INSERT INTO connections (fan,celebrity)
    VALUES (?,?);`,
    DropConnection:`DELETE from pendingConnections WHERE fan=(?) AND celebrity=(?);`
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

