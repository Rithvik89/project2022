const redisClient = require("./../HTTP/DB-kv");

function KVSet(key, value, expiryTime) {
  return new Promise((resolve, reject) => {
    redisClient.SET(key, value, "EX", expiryTime, (err, reply) => {
      if (err) return reject(err);
      resolve(reply);
    });
  });
}

function KVGet(key) {
  return new Promise((resolve, reject) => {
    redisClient.GET(key, (err, reply) => {
      if (err) return reject(err);
      return resolve(reply);
    });
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
