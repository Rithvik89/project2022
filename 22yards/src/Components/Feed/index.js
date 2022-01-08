import 'bootstrap/dist/css/bootstrap.min.css';
import FeedContent from './feedContent.js';
import './index.css'
import AddPost from './AddPost.js';


function createFeed(posts){
    var height;
    height = Math.floor(Math.random()*(400)+100);
    console.log(height);

    var link = "https://picsum.photos/"+height+"/"+height;
    console.log(link)
    const id=posts.length;
    const postDetails={
      'id':id+1,
      'user':`#rithvik_${height}`,
      'content':" They are low on confidence, their form has hit a terrible trough, and on Monday when the situation demanded it, India's most-experienced batting pair was unable to handle the heat in the kitchen",
      'link':link
  }
  posts.push(postDetails)
}

function Feed(){
  let posts=[]
  for(let i=0;i<8;i++){
    createFeed(posts);
  }
  console.log(posts.length)

   return (
    <div className="feed-mid-section">
            <FeedContent posts={posts}/>
            <div className='add-post-container'>
              <AddPost/>
            </div>
    </div>
   )
}
export default Feed