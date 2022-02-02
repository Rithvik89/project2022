const {
    QueryAll,
    Exec,
    Query
} = require('./DB')

const _query = {
    Create: `INSERT INTO posts ( user_id ,content , created_at, likes) VALUES (?,?,?,?)`,
    GetPostById: `SELECT * FROM posts WHERE post_id=?`,
    Delete: `DELETE FROM posts WHERE post_id=?`,
    Update: `UPDATE posts SET content=? WHERE post_id = ?`,
    GetFeed: `SELECT posts.post_id, posts.user_id, posts.content, posts.created_at, posts.likes FROM posts  INNER JOIN events ON posts.post_id = events.post_id WHERE post_id in (SELECT celebrity FROM connections WHERE fan = ?) LIMIT 20 OFFSET ? ORDER BY events.created_at DESC `
}

// defining functions 

function createPost(user_id, content, created_at, likes) {
    return new Promise(async (resolve, reject) => {
        try {
            if (typeof (user_id) != Number) {
                var error = new Error();
                reject(error);
            }
            var results = await Exec(CreatePost, [user, content, created_at, likes]);
            resolve(results);
        } catch (err) {
            reject(err);
        }
    })
}

function updatePostById(post_id, content) {
    return new Promise(async (resolve, reject) => {
        try {
            if (typeof (post_id) != Number) {
                var error = new Error();
                reject(error);
            }
            var results = await Exec(Update, [content, post_id]);
            resolve(results);
        } catch (err) {
            reject(err);
        }
    })
}

function fetchFeed(user_id, offset) {
    return new Promise(async (resolve, reject) => {
        if (typeof (user_id) != 'number' || typeof (offset) != 'number') {
            var err = new Error();
            reject(err);
        }
        try {
            var results = await QueryAll(GetFeed, [user_id, offset]);
            resolve(results);
        } catch (err) {
            reject(err);
        }
    })
}

function fetchPostById(post_id) {
    return new Promise(async (resolve, reject) => {
        if(typeof(post_id) != 'number') {
            var err = new Error();
            reject(err);
        }
        try {
            var results = await Query(GetPostById, [post_id]);
            resolve(results);
        } catch(err) {
            reject(err);
        }
    })
}

function deletePost(post_id) {
    return new Promise(async (resolve, reject) => {
        if(typeof(post_id) != 'number') {
            var err = new Error();
            reject(err);
        }
        try {
            var results = await Exec(DeletePost, [post_id]);
            resolve(results);
        } catch(err) {
            reject(err);
        }
    })
}

module.exports = {
    deletePost, 
    fetchFeed,
    fetchPostById,
    createPost,
    updatePostById
}