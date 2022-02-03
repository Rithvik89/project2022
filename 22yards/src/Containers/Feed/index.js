import 'bootstrap/dist/css/bootstrap.min.css';
import FeedContent from './Components/feedContent.js';
import './index.css'
import ImageView from '../../Components/ImageView/ImageView.js';
import React,{useState} from 'react'
import ImageInCarousal from './Components/ImageInCarousal.js';
import AddPostDiv from './Components/AddPostDiv.js';
import AddPost from './Components/AddPost.js';

function createFeed(posts){
    var height;
    height = Math.floor(Math.random()*(400)+100);
    var link = "https://picsum.photos/"+height+"/"+height;
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
  const [imagesInAddPost,setImagesInAddPost]=useState([])
  const [urlOfImage,setUrlOfImage]=useState("")

  let posts=[];
  for(let i=0;i<8;i++){
    createFeed(posts);
  }  
  
  function addImagesToPost(event){
    const x=event.target.files;
    const fileArray = x ? Array.from(x) : [];
    var y=[];
    fileArray.map((each)=>(
       y.push(URL.createObjectURL(each))
    ))
    setImagesInAddPost([...imagesInAddPost,...y])
  }
  function handleDeleteAImagefromAddPosts(indexUrlToDelete){
    var x=imagesInAddPost;
    x.splice(indexUrlToDelete,1)
    setImagesInAddPost([...x])
  }

  return (
    <div className="d-flex flex-column"
         style={{width:"100%"}}>   
          <div>
            <div placeholder='say' className='Add-Post-Scrolled' contentEditable>
            </div>
            {
               imagesInAddPost.length!==0 &&
                  <div className='d-flex flex-row Add-posts-images-container'>
                    {
                        imagesInAddPost.map((each,index)=>{
                          return(
                              <ImageInCarousal src={each} 
                                onClick={()=>{
                                  setUrlOfImage(each)
                                }}
                                onDelete={()=>{handleDeleteAImagefromAddPosts(index)}}
                                key={each}
                              />
                              
                          )
                        })
                    }
                    </div>       
            }
            
            <label htmlFor='uploadImagesInAddPostRef'>
              <span className='Add-Images-In-AddPost-Button'>
                <img alt="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADY0lEQVRoge3YP4yURRzG8Q8LnpFTgTvjKQ13CYV/IlE5LvFPjIVUFkeiRiFiZWGhAQuBwsJOKaS0wkaUK1FbKwstjBpiCBIk53Vq4RkixgDnrcW8K++7O++78y67t5e43+RN3vedeWefZ2d+M78ZRowYMWLE/5kNFWUN7MQ0tmDTmii6wQouYwmXsBqrVGbgNjyNrQORVp8/8CX+bi/YGKncwDPWj3jCHzqFRTTzBY1I5Z3Wl/gW2wRtBWLjenrwWv5jEgexK3s+hwX8UlJ/By7mX8QMbOmXui5M4l3cnns3i/txDL9HvukYGbEhtFazzUFF8S3G8XLJNx3aYgbWil09lhUYpoEqmt2rBIZp4FxF2Q+pjfQ63m/FS3gS/+ALnFGyWpawIATseNv7K/g4tZHYQvZQl2+24h08gjHBzAPCHP2NYCiFK/hamI0mhdThO5zAcsV3hZ6LpRL7Kz4ew9siC0rG95mAOj1Rl4X8Q90Y2K9cPDyK5+oquhnqGJjB3oR6+7C7Nzn1qWPgxcT6G/Aa7u5JUU1SDezQPbjzjOOwEDMDJdXAXtWbnxjTgomBpiYpBjZirsf2H8YhbO7x+66kGHhQPOlKZTfew2MGYCSle+/rw+/chTdwHsdxPaJjj2B2BhPZ+2X8jG+za6W94RQDVfN+HX7F+zrFz+GA+Kx1b3Y9jt9wWttClmJgqq7SCKv4QHFT3hAWxmcT25jCm0IvHMvaTDJwZ7LMcr4SjkbylIk/i5PZ/avCRJDnLSHdPkpaEP+VLDNOE5+2vZtT/s+fFMb+Mj4sqXNEWPGTDLQa7JWfFDfpm1QnjPnfiu2LW5zAWGwIrSgOrbN4vYvIOuzRn7iawXysBy73ofEqZvvY1nysB5aEDcagyJ87tQK2aogeyN1P4BU3MoPZWA9cEs4iB8W23H3d+FrGR7nn7TEDq8JB6iBN3AyFpDK2JyYE8iKuCinxmP6dYDyFO7L77bggcupcwqSwNtyTPS/VTZH7wSeK47qd9rLTFXVPDeNc6LM+tvX5MAyc0ZlW9MKiIRm4LqQCZUzk7sum86aQ2F0rC+JBc0HYNz8RKWsF9mbFgM1zXMhuh0ojE9Ksca0Ku7t1dSi9T0j4uom/iPkhaezKLXhBONT9EX9m13mcwvNZnQ7+BUBUmgyI0lDmAAAAAElFTkSuQmCC"/>
              </span>
            </label>
            <input type="file" multiple id="uploadImagesInAddPostRef" accept='image/*' style={{display:"none"}} onChange={addImagesToPost}/>
          </div>    
          <FeedContent posts={posts}/> 
          {urlOfImage!=="" && <ImageView src={urlOfImage} CloseThisImage={()=>{
            setUrlOfImage("")
          }}/>}
    </div>
   )
}
export default Feed