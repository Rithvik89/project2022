const {Router} = require('express');
const checkAllowance = require('../Controllers/Auth/checkAllowance');
const { HandleUserLogin, HandleUserRegister,HandleUserLogout} = require('../Controllers/Auth/userController');

const authRouter = Router();


authRouter.post('/register',HandleUserRegister);
authRouter.post('/login',HandleUserLogin );
authRouter.get('/logout',checkAllowance, HandleUserLogout );
module.exports = authRouter;