const {Router} = require('express');
const { HandleUserLogin, HandleUserRegister, HandleUserLogout } = require('../Controllers/Auth/userController');

const authRouter = Router();

authRouter.get('/login', );
authRouter.post('/register', HandleUserLogin);
authRouter.post('/login', HandleUserRegister);
authRouter.post('/logout', HandleUserLogout);

module.exports = authRouter;