import {Card,Button,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './EachNetworkCard.css'

export default function EachNetworkCard(props){
    var height;
    height = Math.floor(Math.random()*(400)+100);
    var link = "https://picsum.photos/"+height+"/"+height;
    return(
    <div className='network-card'>
       <img
            className='netwrok-card-image'
            src="/22YardsLOGO.png"
        />
      <img src={link} className='netwrok-card-image'/>
       <div className='network-card-info'>
        <h6>#CRicket</h6>
        <p>ITS ABOUT ME</p>
        <p>{height} no of mutuals</p>
       </div>
    </div>
    )
}