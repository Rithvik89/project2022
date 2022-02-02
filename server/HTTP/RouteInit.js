const authRouter = require("../Routes/authRoute");
const feedRouter=require('../Routes/feedRoute')
const networkRouter=require('../Routes/networkRoute')
const likeRouter=require('../Routes/likesRoute');
const commentRouter=require('../Routes/commentRoute');
const createTables=require('../DB/createTables')

function routeInit(app)
{
    createTables()
    app.use(authRouter)
    app.use('/feed',feedRouter)
    app.use('/network',networkRouter)
    app.use('/post',likeRouter)
    app.use('/post',commentRouter);
    
    app.get('/dummyAT',(req,res)=>{
      console.log("I'am in dummy")
       res.clearCookie('__AT__').send("Access Token Cookie cleared")
       console.log("Cookie Cleared")
    })
    app.get('/dummyRT',(req,res)=>{
        console.log("I'am in dummy")
         res.clearCookie('__RT__').send("Refresh Token Cookie cleared")
         console.log("Cookie Cleared")
      })

}

module.exports = routeInit;