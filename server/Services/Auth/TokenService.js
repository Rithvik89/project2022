const { signAccessToken, signRefreshToken } = require("../../Helpers/Auth/jwtTokenFactory");


async function signAllTokens (userData) {
    try {
        var accessToken = await signAccessToken(userData);
        var refreshToken = await signRefreshToken(userData);
        return {accessToken, refreshToken};
    } catch (err) {
        throw err;
    }
}

function authorizeRequest () {

}

module.exports = {signAllTokens, authorizeRequest};
