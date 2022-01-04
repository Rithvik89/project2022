import {Card,Button,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './EachNetworkCard.css'

export default function EachNetworkCard(props){
    return(
    <Card className="card-network">
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