const {
  CreateUser,
  GetUser,
} = require("../../DB/DB.Tables/DAO-users");
const { checkIfLogin, performLogin,performLogout} = require("../../Services/Auth/LoginService");

async function HandleUserRegister(req, res,next) {
  const { username, password, email_id } = req.body;
   console.log("cookie's for new regoster account",req.cookies)
  GetUser(username)
    .then(async (result) => {
      if (result.length===0) {
        try {
          await CreateUser(username, password, email_id);
          res.send("Registered successfully");
        } catch (err) {
          next(err);
        }
      } else {
          const err = new Error("User already exits");
          err.code = 404;
          next(err);
      }
    })
    .catch((err) => {
      next(err);
    });
}

function HandleUserLogin(req,res,next) {
  checkIfLogin(req.cookies.__RT__)
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      performLogin(res,req.body.username, req.body.password) 
        .then( (userData) => {
          res.status(200).json(userData);
        })
        .catch((err_) => {
          console.log(err_)
          err_.code=404
          next(err_);
        })
    })
}

async function HandleUserLogout(req, res, next) {
  res.clearCookie('__AT__');
  res.clearCookie('__RT__');
  checkIfLogin(req.cookies.__RT__)
    .then((userData) => {
      performLogout(req.cookies.__RT__,userData)
        .then(
          console.log("User Logged out")
        )
        .catch(err)(
          console.log(err)
        )
    })
    .catch((err) => {
      next(new Error("Already logged out, cannot log out again"));
    })
}

module.exports = {  HandleUserLogin, HandleUserRegister, HandleUserLogout};

