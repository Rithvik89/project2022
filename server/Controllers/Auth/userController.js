const {
  CreateUser,
  GetUser,
  GetAllUsers,
} = require("../../DB/DB.Tables/DAO-users");
const { checkIfAlreadyLogin } = require("../../Services/Auth/LoginService");

async function HandleUserRegister(req, res) {
  const { username, password, email_id } = req.body;

  GetUser(username)
    .then(async (result) => {
      if (result == []) {
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
  checkIfAlreadyLogin(req.cookies.__RT__)
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      
    })
}

async function HandleUserLogout(req, res) {
  checkIfAlreadyLogin(req.cookies.__RT__)
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      
    })
}


async function HandleGetUsers(req, res) {
  const data = await GetAllUsers();
  res.send(data);
}

module.exports = { HandleGetUsers, HandleUserLogin, HandleUserRegister , HandleUserLogout};
