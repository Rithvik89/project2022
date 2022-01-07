import {Card,Button,Container,Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
function NotifMainCard(){
    var height;
    height = Math.floor(Math.random()*(400)+100);
    console.log(height);
    var link = "https://picsum.photos/"+height+"/"+height;
    return (
        <Container  className='notif-main-card-container'>
            <Card  className='notif-main-card'>
             <Card.Body className='notif-main-card-body'>
             <Card.Img variant="top" src={link}  className='notif-main-card-img'/>
             <Card.Text className='notif-main-card-text'>
                  
Your Friday Daily Rundown. Don't sell yourself short in negotiations; When to move on from a job?; and other top news for you
              </Card.Text>
            </Card.Body>
        </Card>
        </Container>
    );
}

export default NotifMainCard;