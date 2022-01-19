CREATE TABLE IF NOT EXISTS user (
    user_id INT AUTO_INCREMENT,
    username VARCHAR(10),
    password VARCHAR(10),
    email_id VARCHAR(15),
    UNIQUE (user_id)
);

CREATE TABLE IF NOT EXISTS posts (
    post_id number PRIMARY KEY AUTO_INCREMENT,
    user_id number NOT NULL ,
    content text NOT NULL,
    post_date date NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS likes (
    post_id number NOT NULL,
    user_id number NOT NULL,
    CONSTRAINT likekey UNIQUE (post_id, user_id)
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comments (
    post_id number NOT NULL,
    user_id number NOT NULL,
    comment text NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS connections (
    police number NOT NULL,
    thief number NOT NULL,
    CONSTRAINT followkey UNIQUE (police, thief)
    FOREIGN KEY (police) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (thief) REFERENCES users(user_id) ON DELETE CASCADE
);
