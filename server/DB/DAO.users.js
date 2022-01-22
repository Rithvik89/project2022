const _query = {
    Create : `
        INSERT INTO USER (username, password, email, index, registration_date)
        VALUES (? , ? , ? , ?, ?);
    `,
    Delete : `
        
    `,
    GetById : ``,
    UpdateById : ``,
}

class DAOUser {
    constructor (DB) {
        this.DB = DB;
    }
    CreateUser (data) {
        
    }
}