import {Card,Button,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedContent from './feedContent.js';
import './index.css'

function Feed(){
   return (
    <Container className="mid-section">
    <Container className="footer-left">
    <Card className="card">
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="dark">Go somewhere</Button>
    </Card.Body>
  </Card>
    </Container>
    <Container className="footer-mid">
      <FeedContent/>
      <FeedContent/>
      <FeedContent/>
      <FeedContent/>
    </Container>
    <Container className='footer-right'>
      <Card className="card">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>
     </Container>
  </Container>
   )
}
export default Feed