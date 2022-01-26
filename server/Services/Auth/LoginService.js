const {
  KVGet
} = require("../../DB/KVStore");
const verifyRefreshToken = require("./../../Helpers/Auth/jwtTokenFactory");
const {
  signAllTokens
} = require("./TokenService");
const {
  AT_DURATION,
  RT_DURATION
} = require('../../Helpers/Auth/jwtTokenFactory');
const {GetUser} = require('../../DB/DB.Tables/DAO-users');
const res = require("express/lib/response");


function checkIfLogin(refreshToken) {
  return new Promise(async (reject, resolve) => {
    verifyRefreshToken(refreshToken)
      .then((payload) => {
        const isBlacklisted = await KVGet(refreshToken);
        if (isBlacklisted) {
          reject();
        } else {
          resolve(payload);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}


//if login is successful it sets the cookie and resolves the payload(user data) else rejects the error
function performLogin(username, password) {
  return new Promise((resolve, reject) => {
    GetUser(username)
      .then(async (data) => {
        if (data !== [] && password === data[0].password) {
          try {
            const tokens = await signAllTokens(data);

            res.cookie('__AT__', tokens.accessToken, {
              maxAge: AT_DURATION,
              httpOnly: true,
              sameSite: 'strict'
            })
            res.cookie('__RT__', tokens.refreshToken, {
              maxAge: RT_DURATION,
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
function performLogout(refreshToken) {
  return new Promise((resolve, reject) => {
    let expirationTimeInSeconds = new Date(0);

    expirationTimeInSeconds.setSeconds(userData.exp);

    expirationTimeInSeconds = Math.ceil(
      (expirationTimeInSeconds - new Date()) / 1000 + 60
    );

    inMemSet(refreshToken, true, expirationTimeInSeconds)
      .then((reply) => {
        return resolve();
      })
      .catch((err) => {
        return reject(makeError.InternalServerError());
      });
  });
}

module.exports = {
  checkIfLogin,
  performLogin,
  performLogout
};