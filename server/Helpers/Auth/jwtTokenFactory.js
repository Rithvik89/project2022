const jwt = require('jsonwebtoken');

const AT_DURATION = {
    msformat : 1000*60*10 ,
    secformat : 60*10
};

const RT_DURATION = {
    msformat : 1000*60*60*24 ,
    secformat : 60*60*24
};


function createToken(payload, secret , options ) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, options, (err, token) => {
            if(err) reject(err);
            resolve(token);
        })
    })
}

function signAccessToken ( userData ) {
    const  payload = {
        username : userData.username,
        email : userData.email,
        index : userData.index,
        profilePicURL : userData.profilePicURL,
        registeredSince : userData.registeredSince
    }
    const secret = process.env.AT_SECRET_KEY;
    const options = {
        expiresIn : AT_DURATION.secformat,
        issuer : '22yards'
    }

    return createToken(payload, secret, options);

}

function signRefreshToken ( userData ) {
    const  payload = {
        username : userData.username,
        email : userData.email,
        index : userData.index,
        profilePicURL : userData.profilePicURL,
        registeredSince : userData.registeredSince
    }
    const secret = process.env.RT_SECRET_KEY;
    const options = {
        expiresIn : RT_DURATION.secformat,
        issuer : '22yards'
    }

    return createToken(payload, secret, options);
}

function verifyAccessToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.AT_SECRET_KEY, (err, payload) => {
            if(err) reject(err);
            resolve(payload);
        })
    })
}

function verifyRefreshToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.RT_SECRET_KEY, (err, payload) => {
            if(err) reject(err);
            resolve(payload);
        })
    })
}

module.exports = {signAccessToken, signRefreshToken, verifyAccessToken, verifyRefreshToken, AT_DURATION, RT_DURATION};