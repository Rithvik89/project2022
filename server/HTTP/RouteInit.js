const { HandleUserLogin, HandleUserRegister } = require("../Controllers/userController");



function routeInit(app)
{
    app.use('/login', HandleUserLogin);
    app.use('/register', HandleUserRegister);
}

module.exports = routeInit;