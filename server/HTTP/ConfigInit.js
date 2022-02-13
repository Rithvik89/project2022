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
    redisPort: 6379,
    redisHost: "localhost",
    mySqlHost: "localhost",
    mySqlPort: 3306,
    mySqlUser: "parthiv",
    mySqlDB: "parthiv",
    mySqlPassword:"Parthiv@65700",
  },
};

module.exports  = Conf;
