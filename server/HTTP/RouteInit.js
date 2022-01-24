const authRouter = require("../Routes/authRoute");


function routeInit(app)
{
    app.use('/auth', authRouter)
}

module.exports = routeInit;