const {
    signAccessToken,
    signRefreshToken
} = require("../../Helpers/Auth/jwtTokenFactory");


async function signAllTokens(userData) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("IN Sign ALL tokens")
            var accessToken = await signAccessToken(userData[0]);
            console.log(accessToken)
            var refreshToken = await signRefreshToken(userData[0]);
            console.log(refreshToken)
            resolve({
                accessToken,
                refreshToken
            });
        } catch (err) {
            reject(err);
        }
    })

}

function authorizeRequest() {

}

module.exports = {
    signAllTokens,
    authorizeRequest
};