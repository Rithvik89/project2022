const {
    verifyAccessToken,
    verifyRefreshToken
} = require("../../Helpers/Auth/jwtTokenFactory");

function checkAllowance(req, res,next) {
    console.log("Iam here")
    verifyAccessToken(req.cookies.__AT__)
        .then((data) => {
            req.credentials=data
            console.log("iam here also")
            next();
        })
        .catch((err) => {
            console.log(req.cookies.__RT__)
            verifyRefreshToken(req.cookies.__RT__)
                .then(async (data) => {
                    console.log("IN try")
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