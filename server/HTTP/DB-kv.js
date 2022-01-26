const redis = require("redis");

const redisClient = redis.createClient({
  url:"redis-19007.c11.us-east-1-3.ec2.cloud.redislabs.com:19007"
});

redisClient.on("connect", () => {
  console.log("Connected To Redis");
});

redisClient.on("error", (err) => {
  console.log(err.message);
});

redisClient.on("ready", () => {
  console.log("Redis ready to use");
});

redisClient.on("end", () => {
  console.log("Redis disconnected");
});

process.on("SIGINT", () => {
  redisClient.quit();
});

module.exports = redisClient;
