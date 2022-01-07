import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt,FaShare } from "react-icons/fa";
import './index.css'

function FeedContent(){
    var height;
    height = Math.floor(Math.random()*(400)+100);
    console.log(height);
    var link = "https://picsum.photos/"+height+"/"+height;
    return (
            <Card className="text-center feed-margin">
            <Card.Header>
                <div className="feed-content-card-header">
                    <Card.Img variant="top" src={link}  className='feed-main-card-img'/>
                    <h4 className='feed-content-user-handle'>#Rithvik_{height}</h4>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>Concerned in senior players form</Card.Title>
                <Card.Text>
                     They are low on confidence, their form has hit a terrible trough, and on Monday when the situation demanded it, India's most-experienced batting pair was unable to handle the heat in the kitchen
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
               <div className="feed-content-metadata">
                <AiFillLike fontSize="25px"/>
                <FaCommentAlt fontSize="20px"/>
                <FaShare fontSize="20px"/>
               </div>
            </Card.Footer>
          </Card>
    )
}
export default FeedContent