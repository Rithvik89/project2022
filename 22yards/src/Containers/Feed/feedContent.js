import {Card,Button,Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import './index.css'
import Comment from './Comment';


function FeedContent(props){
    const {posts}=props
    return (
           posts.map(post=>{
               const {link,user,content,id}=post
               return (
                <Card className="text-center feed-cards">
                    
                    <Card.Header>
                        <div className="feed-content-card-header">
                            <Card.Img variant="top" src={link}  className='feed-main-card-img'/>
                            <h4 className='feed-content-user-handle'>{post.user}</h4>
                        </div>
                    </Card.Header>

                    <Link to={`/feed/${id}`} style={{ textDecoration: 'none',color:'black' }}>
                        <Card.Body>
                            <Card.Title>Concerned in senior players form</Card.Title>
                            <Card.Text>
                                {post.content}
                            </Card.Text>
                        </Card.Body>
                    </Link>

                    <Card.Footer className="text-muted">
                    <div className="feed-content-metadata">
                        <Button variant="outline-dark"> <AiFillLike fontSize="25px"/></Button>
                        <Comment postDetails={post}/>
                        <Button variant="outline-dark"> <FaShare fontSize="20px"/></Button>
                    </div>
                    </Card.Footer>

                </Card>
               )
           }
                )
    )
}
export default FeedContent