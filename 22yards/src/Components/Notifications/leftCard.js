import {Card,Button,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function leftCard(){
    console.log("Hello")
    return (
        <Container  className='left-card-container'>
        <Card  className='left-card'>
        <Card.Body>
        <Card.Title className='left-card-title'>Notifications</Card.Title>
         <Card.Text className='left-card-text'>
         You’re all caught up! Check back later for new notifications
         </Card.Text>
         <hr></hr>
     
         <Card.Text className='left-card-text'>
           Improve your notifications
         </Card.Text >
             <a href="# " className="left-card-a">view settings</a>
         </Card.Body>
        </Card>
        </Container>
    );
}

export default leftCard;