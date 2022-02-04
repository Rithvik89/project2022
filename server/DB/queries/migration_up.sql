CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(10) UNIQUE NOT NULL,
    password VARCHAR(10) NOT NULL,
    email_id VARCHAR(15) NOT NULL,
    profile_picture text,
    created_at date
);

CREATE TABLE IF NOT EXISTS posts (
    post_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL ,
    content text NOT NULL,
    created_at date NOT NULL,
    likes INT,
    comments INT,x
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS likes (
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT likekey UNIQUE (post_id, user_id)
    FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS comments (
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    comment text NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
);

CREATE TABLE IF NOT EXISTS connections (
    police INT NOT NULL,
    thief INT NOT NULL,
    CONSTRAINT followkey UNIQUE (police, thief),
    FOREIGN KEY (police) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (thief) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS events (
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    created_at date,
    FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
    CONSTRAINT eventskey UNIQUE (user_id, post_id)
);
