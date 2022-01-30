const jwt = require('jsonwebtoken');

const AT_DURATION = {
    secformat : 1000*60*2 ,
    msformat : 60*10
};

const RT_DURATION = {
    secformat : 1000*60*60 ,
    msformat : 60*60*24
};

//creates and resolves token if token is valid else rejects error
function createToken(payload, secret , options ) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, options, (err, token) => {
            if(err) reject(err);
            resolve(token);
        })
    })
}


//creates and resolves token if token is valid else rejects error
function signAccessToken ( userData ) {
    const  payload = {
        username : userData.username,
        email : userData.email_id,
    }
    const secret = process.env.AT_SECRET_KEY;
    const options = {
        expiresIn : AT_DURATION.secformat,
        issuer : '22yards'
    }

    return createToken(payload, secret, options);

}

//creates and resolves token if token is valid else rejects error
function signRefreshToken ( userData ) {
    const  payload = {
        username : userData.username,
        email : userData.email_id,
    }
    console.log(RT_DURATION.secformat)
    const secret = process.env.RT_SECRET_KEY;
    const options = {
        expiresIn : RT_DURATION.secformat,
        issuer : '22yards'
    }

    return createToken(payload, secret, options);
}

//verifies and resolves payload if token is valid else rejects error
function verifyAccessToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.AT_SECRET_KEY, (err, payload) => {
            console.log(payload)
            if(err) reject(err);
            resolve(payload);
        })
    })
}


//verifies and resolves payload if token is valid else rejects error
function verifyRefreshToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.RT_SECRET_KEY, (err, payload) => {
            console.log(payload)
            if(err) reject(err);
            resolve(payload);
        })
    })
}

module.exports = {signAccessToken, signRefreshToken, verifyAccessToken, verifyRefreshToken, AT_DURATION, RT_DURATION};