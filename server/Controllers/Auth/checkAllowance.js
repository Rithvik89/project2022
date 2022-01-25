const {
    verifyAccessToken,
    verifyRefreshToken
} = require("../../Helpers/Auth/jwtTokenFactory");

function checkAllowance(req, res) {
    verifyAccessToken(req.cookie.__AT__)
        .then((data) => {
            next();
        })
        .catch((err) => {
            verifyRefreshToken(req.cookie.__RT__)
                .then((data) => {
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
                    res.clearCookie(__AT__);
                    res.clearCookie(__RT__);
                })
        })
}