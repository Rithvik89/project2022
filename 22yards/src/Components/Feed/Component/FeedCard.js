import {Card,Button,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeedCard.css'

export default function FeedCard(props){
    return(
    <Card className="card">
    <Card.Body>
      <Card.Title>{props.Title}</Card.Title>
      <Card.Text>
        {props.Text}
      </Card.Text>
      <Button variant="dark">{props.Button}</Button>
    </Card.Body>
    </Card>
    )
}