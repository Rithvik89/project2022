import {Card,Button,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import LeftCard from './leftCard.js';
import MainCard from './mainCard.js';
function Notifications(){
    return (
        <Container  className='components'>
            <LeftCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />

        </Container>
    );
}

export default Notifications