const {
  KVSet,KVGet
} = require("../../DB/KVStore");
const {verifyRefreshToken} = require("./../../Helpers/Auth/jwtTokenFactory");
const {
  signAllTokens
} = require("./TokenService");
const {
  AT_DURATION,
  RT_DURATION
} = require('../../Helpers/Auth/jwtTokenFactory');
const {GetUser} = require('../../DB/DB.Tables/DAO-users');


function checkIfLogin(refreshToken) {
  return new Promise((resolve, reject) => {
    verifyRefreshToken(refreshToken)
      .then(async (payload) => {
        const isBlacklisted = await KVGet(refreshToken);
        if(!isBlacklisted){
          resolve(payload)
        }
        else{
          reject()
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}


//if login is successful it sets the cookie and resolves the payload(user data) else rejects the error
function performLogin(res,username, password) {
  return new Promise((resolve, reject) => {
    GetUser(username)
      .then(async (data) => {
        if (data !== [] && password === data[0].password) {
          try {
            const tokens = await signAllTokens(data);
            res.cookie('__AT__', tokens.accessToken, {
              maxAge: AT_DURATION.secformat,
              httpOnly: true,
              sameSite: 'strict'
            })
            res.cookie('__RT__', tokens.refreshToken, {
              maxAge: RT_DURATION.secformat,
              httpOnly: true,
              sameSite: 'strict'
            })

            resolve(data);

          } catch (err) {
            reject(err);
          }
        } else {
          reject(new Error('Invalid Credentials'));
        }
      })
      .catch((err) => {
        reject(err);
      })
  })

}

//add the refresh token to redis
function performLogout(refreshToken, userData) {
  return new Promise((resolve, reject) => {
    let expirationTimeInSeconds = new Date(0);

    expirationTimeInSeconds.setSeconds(userData.exp);

    expirationTimeInSeconds = Math.ceil(
      (expirationTimeInSeconds - Date.now()) / 1000 + 60
    );

    KVSet(refreshToken, 1, expirationTimeInSeconds)
      .then((reply) => {
         resolve();
      })
      .catch((err) => {
        console.log("server err")
        reject(err);
      });
  });
}

module.exports = {
  checkIfLogin,
  performLogin,
  performLogout
};