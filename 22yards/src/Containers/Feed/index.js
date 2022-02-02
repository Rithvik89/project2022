import 'bootstrap/dist/css/bootstrap.min.css';
import FeedContent from './feedContent.js';
import './index.css'
import AddPost from './AddPost.js';
import React,{useState,useEffect} from 'react'

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
  const [temp,setTemp]=useState([])
  for(let i=0;i<8;i++){
    createFeed(posts);
  }
  console.log(posts.length)
  
  return (
    <div className="d-flex flex-column"
         style={{width:"100%"}}
    >       
      {console.log("hey",temp)}
            
            <FeedContent posts={posts}/>
            <div className='add-post-container'>
              <AddPost/>
            </div>
            { temp &&
             <div className='d-flex flex-column'>
                {
                  temp.map((each)=>(
                    <div>
                       {each.content}
                    </div>
                  ))
                }
             </div>
            }
          
    </div>
   )
}
export default Feed