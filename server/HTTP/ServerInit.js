const express = require('express');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');


function ServerInit(conf) {
    const app = express();

    app.use(xss());

    app.use((req, res, next) => {
        res.setHeader("X-Powered-By", "Java Spring");
        next();
    })

    app.enable("trust proxy");

    app.use(express.json());
    app.use(express.urlencoded({extended : true}));
    app.use(cookieParser());

    // console.log(
    //     conf.primaryInfo.isDevMode
    //         ? "Configured in Dev Mode"
    //         : "Configure in Production Mode"
    // );

    return app;
}

module.exports = ServerInit;