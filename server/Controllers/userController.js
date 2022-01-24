const {
  CreateUser,
  GetUser,
  GetAllUsers,
} = require("../DB/DB.Tables/DAO-users");

async function HandleUserRegister(req, res) {
  const { username, password, email_id } = req.body;

  GetUser(username)
    .then(async (result) => {
      if (result == []) {
        try {
          await CreateUser(username, password, email_id);
          res.send("Registered successfully");
        } catch (err) {
          res.send("registration Failed");
        }
      } else {
          const err = new Error("User already exits");
          err.code = 409;
          throw err;
      }
    })
    .catch((err) => {
      throw err;
    });
}

async function HandleUserLogin(req, res) {
  const { username, password } = req.body;
  try {
    const data = await GetUser(username);
    if (password === data[0].password) {
      const token = jwt.sign({ username, password }, SecretKey);
      res.send(token);
    } else {
      res.send("Invalid Credentials");
    }
  } catch (err) {
    res.send("invalid credentials");
  }
}

async function HandleGetUsers(req, res) {
  const data = await GetAllUsers();
  res.send(data);
}

module.exports = { HandleGetUsers, HandleUserLogin, HandleUserRegister };
