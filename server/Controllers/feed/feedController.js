const {
   deletePost,
   fetchFeed,
   fetchPostById,
   createPost,
   updatePostById
} = require('../../DB/DB.Tables/DAO-Posts')


async function HandleAddUserPost(req, res, next) {
   const {
      user_id
   } = req.userData
   const {
      content
   } = req.body
   registered_date = new Date();

   console.log(user_id, content, registered_date)
   try {
      await createPost(user_id, content, registered_date)
      res.send("Post created successfully")
   } catch (err) {
      err.code = 501
      next(err)
   }
}

async function HandleGetAllPosts(req, res, next) {
   const offset = Number(req.query.offset);
   const {
      user_id
   } = req.userData
   try {
      const data = await fetchFeed(user_id, offset)
      const map = new Map();
      function myfunc(value) {
         map.set(value.post_id, 1);
      }
      data.forEach(myfunc);
      console.log(map.size)
      res.status(200).json(data)
   } catch (err) {
      next(err);
   }
}

async function HandleGetThisPost(req, res) {
   const feed_id = Number(req.params.id)
   try {
      const data = await fetchPostById(feed_id);
      res.status(200).json(data);
   } catch (err) {
      next(err);
   }
}

async function HandleDeletePost(req, res) {
   const feed_id = Number(req.params.id)
   try {
      const data = await deletePost(feed_id);
      res.status(200).json({
         message: 'successful deletion'
      });
   } catch (err) {
      next(err);
   }
}



module.exports = {
   HandleAddUserPost,
   HandleGetAllPosts,
   HandleGetThisPost,
   HandleDeletePost
}