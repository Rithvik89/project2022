import {Card,Button,Container,Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
function mainCard(){
    var height;
    height = Math.floor(Math.random()*(400)+100);
    console.log(height);
    var link = "https://picsum.photos/"+height+"/"+height;
    return (
        <Container  className='main-card-container'>
            <Card  className='main-card'>
             <Card.Body className='main-card-body'>
             <Card.Img variant="top" src={link}  className='main-card-img'/>
             <Card.Text className='main-card-text'>
                  
Your Friday Daily Rundown. Don't sell yourself short in negotiations; When to move on from a job?; and other top news for you
              </Card.Text>
              <Dropdown>
                     <Dropdown.Toggle variant="success" id="dropdown-basic">
                            
                     </Dropdown.Toggle>

                 <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                 </Dropdown.Menu>
            </Dropdown>
            </Card.Body>
        </Card>
        </Container>
    );
}

export default mainCard;