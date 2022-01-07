import {Card,Button,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './EachNetworkCard.css'

export default function EachNetworkCard(props){
    var height;
    height = Math.floor(Math.random()*(400)+100);
    console.log(height);
    var link = "https://picsum.photos/"+height+"/"+height;
    return(
    <div className='card-network'>
       <img src={link} className='netwrok-card-image'/>
       <h6>#CRicket</h6>
       <p>ITS ABOUT ME</p>
       <p>{height} no of mutuals</p>
    </div>
    )
}