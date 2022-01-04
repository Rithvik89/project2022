import {Card,Button,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import FeedCard from './Component/FeedCard';

const footerLeftRight=[
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  }
]

const footerMid=[
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  },
  {
    Title:"Card Title",
    Text:`Some quick example text to build on the card title and make up the bulk of
          the card's content.`,
    Button:"Go SomeWhere"

  }
]

function Feed(){
   return (
    <Container className="mid-section">
    <Container className="footer-left">
        {
          footerLeftRight.map((each)=>
          <FeedCard Title={each.Title} Text={each.Text} Button={each.Button}/>
          )
        }
    </Container>
    <Container className="footer-mid">
    {
          footerMid.map((each)=>
          <FeedCard Title={each.Title} Text={each.Text} Button={each.Button}/>
          )
        }
    </Container>
    <Container className='footer-right'>
    {
          footerLeftRight.map((each)=>
          <FeedCard Title={each.Title} Text={each.Text} Button={each.Button}/>
          )
        }
     </Container>
  </Container>
   )
}
export default Feed