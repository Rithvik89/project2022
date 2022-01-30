const redisClient = require("./../HTTP/DB-kv");

function KVSet(key, value, expiryTime) {
  return new Promise(async (resolve, reject) => {
    try{
      await redisClient.set(key,value)
      await redisClient.expire(key, expiryTime)
      resolve()
     }
     catch(err){
       console.log("Coming into reject")
       reject(err)
     }    
  });
}

function KVGet(key) {
  return new Promise(async(resolve, reject) => {
    try{
     const data=await redisClient.get(key)
     resolve(data)
    }
    catch(err){
      reject(err)
    }      

  });
}

function KVDel(key) {
  return new Promise((resolve, reject) => {
    redisClient.DEL(key, (err, reply) => {
      if (err) return reject(err);
      return resolve(reply);
    });
  });
}

module.exports = { KVSet, KVGet, KVDel };
