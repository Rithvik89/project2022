require("dotenv").config();

class ConfClass {
  constructor(conf) {
    this.conf = conf;
  }
  getString() {
    return this.conf;
  }
  getNumber() {
    return Number(this.conf);
  }
  getBoolean() {
    return this.conf === "true";
  }
}
function getConf(key) {
  if (typeof process.env[key] === "undefined") {
    console.log(`Environment variable ${key} is not set.`);
    return undefined;
  }
  return new ConfClass(String(process.env[key]));
}

const Conf = {
  primaryInfo: {
    isDevMode: !((getConf("NODE_ENV")?.getString() || "") === "production"),
    forWeb: getConf("IS_WEB")?.getBoolean() || false,
    serverPort: getConf("SERVER_PORT")?.getNumber() || 8080,
  },
  connectivity: {
    redisPort: getConf("REDIS_PORT")?.getNumber() || 6379,
    redisUri: getConf("REDIS_URI")?.getString() || "redis",
    postgresHost: getConf("MYSQL_HOST")?.getString() || "localhost",
    postgresPort: getConf("MYSQL_PORT")?.getNumber() || 3306,
    postgresUser: getConf("MYSQL_USER")?.getString() || "parthiv",
    postgresDB: getConf("MYSQL_DB")?.getString() || "parthiv",
    postgresPassword: getConf("MYSQL_PASSWORD")?.getString() || "parthiv",
  },
};

module.exports  = Conf;
