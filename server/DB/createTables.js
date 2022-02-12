const config = require('../HTTP/config')

const {
    mysql_pool
} = config

function createTables(req, res) {
    const createUserTableQuery = 
    `CREATE TABLE IF NOT EXISTS user (
        user_id INT AUTO_INCREMENT,
        username VARCHAR(20) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        email_id VARCHAR(40) NOT NULL,
        cric_index INT DEFAULT 0,
        profile_image VARCHAR(100) NOT NULL,
        registered_date DATE,
        PRIMARY KEY (user_id)
    );`

    const createPostTableQuery = 
    `CREATE TABLE IF NOT EXISTS posts (
        post_id INT AUTO_INCREMENT,
        user_id INT NOT NULL ,
        content text NOT NULL,
        created_at date NOT NULL,
        comments INT DEFAULT 0,
        likes INT DEFAULT 0,
        shares INT DEFAULT 0,
        PRIMARY KEY (post_id),
        FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
    );`

    const createLikesTableQuery = 
    `CREATE TABLE IF NOT EXISTS likes (
        post_id INT NOT NULL,
        user_id INT NOT NULL,
        PRIMARY KEY (post_id, user_id)
        FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    );`

    const createCommentsTableQuery = 
    `CREATE TABLE IF NOT EXISTS comments (
        comment_id INT AUTO_INCREMENT;
        post_id INT NOT NULL,
        user_id INT NOT NULL,
        comment text NOT NULL,
        PRIMARY KEY(comment_id),
        FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(user_id) 
    );`

    const createEventsTableQuery = 
    `CREATE TABLE IF NOT EXISTS events (
        user_id INT NOT NULL,
        post_id INT NOT NULL,
        created_at date,
        FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
        CONSTRAINT eventskey UNIQUE (user_id, post_id)
    );`

    const createConnectionTableQuery = 
    `CREATE TABLE IF NOT EXISTS connections (
        fan INT NOT NULL,
        celebrity INT NOT NULL,
        PRIMARY KEY (fan, celebrity),
        FOREIGN KEY (fan) REFERENCES users(user_id) ON DELETE CASCADE,
        FOREIGN KEY (celebrity) REFERENCES users(user_id) ON DELETE CASCADE
    );`
    const createPendingConnectionTableQuery = 
    `CREATE TABLE IF NOT EXISTS pendingconnections (
        fan INT NOT NULL,
        celebrity INT NOT NULL,
        PRIMARY KEY (fan, celebrity),
        FOREIGN KEY (fan) REFERENCES users(user_id) ON DELETE CASCADE,
        FOREIGN KEY (celebrity) REFERENCES users(user_id) ON DELETE CASCADE
    );`

    mysql_pool.query(createUserTableQuery, (error, result, field) => {
        if (error) console.log(error);
    })

    mysql_pool.query(createPostTableQuery, (error, result, field) => {
        if (error) console.log(error);
    })

    mysql_pool.query(createConnectionTableQuery, (error, result, field) => {
        if (error) console.log(error);
    })

    mysql_pool.query(createPendingConnectionTableQuery, (error, result, field) => {
        if (error) console.log(error);
    })

    mysql_pool.query(createEventsTableQuery, (error, result, field) => {
        if (error) console.log(error);
    })

    mysql_pool.query(createLikesTableQuery, (error, result, field) => {
        if (error) console.log(error);
    })

    mysql_pool.query(createCommentsTableQuery, (error, result, field) => {
        if (error) console.log(error);
    })
}

module.exports = createTables