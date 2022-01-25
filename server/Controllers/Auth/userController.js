const {
  CreateUser,
  GetUser,
  GetAllUsers,
} = require("../../DB/DB.Tables/DAO-users");
const { checkIfLogin, performLogin, performLogout } = require("../../Services/Auth/LoginService");

async function HandleUserRegister(req, res) {
  const { username, password, email_id } = req.body;

  GetUser(username)
    .then((result) => {
      if (result === []) {
        try {
          await CreateUser(username, password, email_id);
          res.send("Registered successfully");
        } catch (err) {
          next(err);
        }
      } else {
          const err = new Error("User already exits");
          err.code = 409;
          next(err);
      }
    })
    .catch((err) => {
      next(err);
    });
}

async function HandleUserLogin(req, res) {
  checkIfLogin(req.cookies.__RT__)
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      performLogin(req.body.username, req.body.username) 
        .then( (userData) => {
          res.status(200).json(userData);
        })
        .catch((err_) => {
          next(err_);
        })
    })
}

async function HandleUserLogout(req, res) {
  res.clearCookie('__AT__');
  res.clearCookie('__RT__');
  checkIfLogin(req.cookies.__RT__)
    .then((userData) => {
      performLogout(req.cookies.__RT__);  
        .then()
        .catch()
    })
    .catch((err) => {
      next(new Error("Already logged out, cannot log out again"));
    })
}


async function HandleGetUsers(req, res) {
  const data = await GetAllUsers();
  res.send(data);
}

module.exports = { HandleGetUsers, HandleUserLogin, HandleUserRegister , HandleUserLogout};
