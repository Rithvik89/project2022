import {Card,Button,Container} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import Comment from '../Comment';
import CommentSection from './CommentSection';
import './index.css'

function FeedBody(){

   const {id}=useParams()

    var height;
    height = Math.floor(Math.random()*(400)+100);
    console.log(height);

    var link = "https://picsum.photos/"+height+"/"+height;
    console.log(link)
    const postDetails={
      'id':id,
      'user':`#rithvik_${height}`,
      'content':" They are low on confidence, their form has hit a terrible trough, and on Monday when the situation demanded it, India's most-experienced batting pair was unable to handle the heat in the kitchen",
      'link':link
    }

    return(
        <div className='feed-comment-mid-section'>
            <Card className="text-center feed-cards">
                    
                    <Card.Header>
                        <div className="feed-content-card-header">
                            <Card.Img variant="top" src={link}  className='feed-main-card-img'/>
                            <h4 className='feed-content-user-handle'>{postDetails.user}</h4>
                        </div>
                    </Card.Header>

                        <Card.Body>
                            <Card.Title>Concerned in senior players form</Card.Title>
                            <Card.Text>
                                {postDetails.content}
                            </Card.Text>
                        </Card.Body>

                    <Card.Footer className="text-muted">
                    <div className="feed-content-metadata">
                        <Button variant="outline-dark"> <AiFillLike fontSize="25px"/></Button>
                        <Comment postDetails={postDetails}/>
                        <Button variant="outline-dark"> <FaShare fontSize="20px"/></Button>
                    </div>
                    </Card.Footer>

                </Card>

               <Container>
                   <CommentSection/>
               </Container>
        </div>
    )
}

export default FeedBody