const {
    QueryAll,
    Exec,
    Query
} = require('./DB')

const _query = {
    Create: `INSERT INTO posts (post_id, user_id ,content , created_at, likes) VALUES (?,?,?,?,?)`,
    GetPost: `SELECT * FROM posts WHERE post_id=?`,
    Delete: `DELETE FROM posts WHERE post_id=?`,
    Update: `UPDATE posts SET content=? WHERE post_id = ?`,
    GetFeed: `SELECT * FROM posts  INNER JOIN events ON posts.post_id = events.post_id WHERE post_id in (SELECT thief FROM connections WHERE police = ?) LIMIT 20 OFFSET ? ORDER BY events.created_at DESC `
}

// defining functions 

function CreatePost(username, content) {
    return Exec(_query.Create, [username, content])
}

function GetAllPosts() {
    return QueryAll(_query.GetAll)
}

async function fetchFeed(user_id, offset) {
    return new Promise((resolve, reject) => {
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

function GetThisPost(post_id) {
    return Query(_query.GetPost, [post_id])
}

function DeletePost(post_id) {
    return Exec(_query.Delete, [post_id])
}

module.exports = {
    GetAllPosts,
    CreatePost,
    GetThisPost,
    DeletePost
}