const authRouter = require("../Routes/authRoute");
const createTables=require('../DB/createTables')


function routeInit(app)
{
    createTables();
    app.use('/auth', authRouter)
}

module.exports = routeInit;