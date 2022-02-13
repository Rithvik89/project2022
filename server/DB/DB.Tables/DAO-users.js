const {
    QueryAll,
    Exec,
    Query
} = require('./DB')

const _query = {
    Create: `INSERT INTO users
            (username , password , email_id , profile_image, registered_date) 
            VALUES (?,?,?,?, ?) `,
    GetUser: `SELECT * FROM users WHERE username=?`,
    Delete: `DELETE FROM users WHERE user_id=?`,
    Update: `UPDATE users 
                SET password = ?, profile_picture = ? 
                where user_id = ?`
};


async function CreateUser(username, password, email_id,
    profile_picture) {
    try {
        const registered_date = registered_date
        const results = await Exec(_query.Create, [username, password,
            email_id, profile_picture, registered_date
        ]);
        return results;
    } catch (err) {
        throw err;
    }
}

async function GetUser(username) {
    try {
        var result = await Query(_query.GetUser, [username]);
        return result;
    } catch (err) {
        throw err;
    }
}

async function UpdateUser(user_id, password, profile_picture) {
    if (typeof (user_id) != 'number') {
        var err = new Error('Invalid Inputs');
        err.srvMessage = "user_id is not a number(invalid input) for GetUser By Id";
        err.code = 400;
        throw err;
    }
    try {
        var result = await Exec(_query.Update, [password, profile_picture, user_id]);
        return result;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    CreateUser,
    GetUser,
    UpdateUser
}