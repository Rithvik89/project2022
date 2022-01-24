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

function checkIfAlreadyLogin(refreshToken) {
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
        throw err;
      });
  });
}

async function performLogin(username, password) {
  GetUser(username)
    .then((data) => {
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

      }
    })
    .catch((err) => {
      next(err);
    })
}

function performLogout() {}

module.exports = {
  checkIfAlreadyLogin,
  performLogin,
  performLogout
};