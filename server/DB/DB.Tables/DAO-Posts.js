const {
    QueryAll,
    Exec,
    Query
} = require('./DB')

const _query = {
    Create: `INSERT INTO posts ( user_id ,content , created_at) VALUES (?,?,?)`,
    GetPostById: `SELECT * FROM posts WHERE post_id=?`,
    Delete: `DELETE FROM posts WHERE post_id=?`,
    Update: `UPDATE posts SET content=? WHERE post_id = ?`,

    GetFeed: `  
                SELECT posts.post_id, posts.user_id, posts.content, posts.created_at, posts.likes 
                FROM posts  
                INNER JOIN events ON posts.post_id = events.post_id 
                WHERE posts.user_id in (SELECT thief FROM connections 
                                WHERE police = ?)
                LIMIT 20 OFFSET ? ORDER BY events.created_at DESC 
            `
}

// defining functions 

function createPost(user_id, content, created_at) {
    return new Promise(async (resolve, reject) => {
        try {
            if (typeof (user_id) != Number) {
                var err = new Error('Invalid Inputs');
                err.srvMessage = "user_id is not a number(invalid input) for GetUser By Id";
                err.code = 400;
                throw err;

            }
            await Exec(_query.Create, [user_id, content, created_at]);
            resolve()
        } catch (err) {
            reject(err);
        }
    })
}

function updatePostById(post_id, content) {
    return new Promise(async (resolve, reject) => {
        try {
            if (typeof (post_id) != Number) {
                var err = new Error('Invalid Inputs');
                err.srvMessage = "post_id is not a number(invalid input) for GetUser By Id";
                err.code = 400;
                throw err;
            }
            var results = await Exec(_query.Update, [content, post_id]);
            resolve(results);
        } catch (err) {
            reject(err);
        }
    })
}

function fetchFeed(user_id, offset) {
    return new Promise(async (resolve, reject) => {
        if (typeof (user_id) != 'number' || typeof (offset) != 'number') {
            var err = new Error('Invalid Inputs');
            err.srvMessage = "user_id is not a number(invalid input) for GetUser By Id";
            err.code = 400;
            throw err;
        }
        try {
            var results = await QueryAll(_query.GetFeed, [user_id, offset]);
            resolve(results);
        } catch (err) {
            reject(err);
        }
    })
}

function fetchPostById(post_id) {
    return new Promise(async (resolve, reject) => {
        if (typeof (post_id) != 'number') {
            var err = new Error('Invalid Inputs');
            err.srvMessage = "user_id is not a number(invalid input) for GetUser By Id";
            err.code = 400;
            throw err;
        }
        try {
            var results = await Query(_query.GetPostById, [post_id]);
            resolve(results);
        } catch (err) {
            reject(err);
        }
    })
}

function deletePost(post_id) {
    return new Promise(async (resolve, reject) => {
        if (typeof (post_id) != 'number') {
            var err = new Error('Invalid Inputs');
            err.srvMessage = "post_id is not a number(invalid input) for GetUser By Id";
            err.code = 400;
            throw err;
        }
        try {
            var results = await Exec(_query.Delete, [post_id]);
            resolve(results);
        } catch (err) {
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