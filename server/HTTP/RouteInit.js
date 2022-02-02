const authRouter = require("../Routes/authRoute");
const feedRouter=require('../Routes/feedRoute')
const networkRouter=require('../Routes/networkRoute')
const createTables=require('../DB/createTables')

function routeInit(app)
{
    createTables()
    app.use(authRouter)
    app.use('/feed',feedRouter)
    app.use('/network',networkRouter)

}

module.exports = routeInit;