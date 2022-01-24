const { HandleUserLogin, HandleUserRegister } = require("../Controllers/Auth/userController");



function routeInit(app)
{
    app.post('/login', HandleUserLogin);
    app.post('/register', HandleUserRegister);
}

module.exports = routeInit;