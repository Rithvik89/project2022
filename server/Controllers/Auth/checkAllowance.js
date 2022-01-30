const {
    verifyAccessToken,
    verifyRefreshToken,
} = require("../../Helpers/Auth/jwtTokenFactory");
const {
    performLogout
} = require("../../Services/Auth/LoginService");


function checkAllowance(req, res, next) {
    verifyAccessToken(req.cookie.__AT__)
        .then((data) => {
            verifyRefreshToken(req.cookie.__RT__)
                .then((data) => {
                    req.userData = data;
                    next();
                })
                .catch((err) => {
                    next(err);
                })
        })
        .catch((err) => {
            console.log(req.cookies.__RT__)
            verifyRefreshToken(req.cookies.__RT__)
                .then(async (data) => {
                    console.log("IN try")
                    const tokens = await signAllTokens(data);
                    performLogout(req.cookies.__RT__, data);
                    res.cookie("__AT__", tokens.accessToken, {
                        maxAge: AT_DURATION,
                        httpOnly: true,
                        sameSite: "strict",
                    });
                    res.cookie("__RT__", tokens.refreshToken, {
                        maxAge: RT_DURATION,
                        httpOnly: true,
                        sameSite: 'strict'
                    })
                    next();
                })
                .catch((err) => {
                    res.clearCookie('__AT__');
                    res.clearCookie('__RT__');
                    res.send('login First')
                })
        })
}

module.exports = checkAllowance
