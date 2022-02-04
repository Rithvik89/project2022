import {Card,Button} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom'
function Post(){
  const {id}=useParams()
    var height;
    height = Math.floor(Math.random()*(400)+100);
    var link = "https://picsum.photos/"+height+"/"+height;
    console.log(link)
    const postDetails={
      'id':id,
      'user':`#rithvik_${height}`,
      'content':" They are low on confidence, their form has hit a terrible trough, and on Monday when the situation demanded it, India's most-experienced batting pair was unable to handle the heat in the kitchen",
      'link':link
    }
    return (
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
      </Card.Footer>
  </Card>

    );
}
export default Post;