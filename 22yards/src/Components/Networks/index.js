import {Card,Button,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import EachNetworkCard from './components/EachNetwokCard/EachNetworkCard';

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

function Networks(){
   return (
    <div className="networks-mid-section">
       {
          footerMid.map((each)=>
          <EachNetworkCard Title={each.Title} Text={each.Text} Button={each.Button}/>
          )
        }
    </div>
   )
}
export default Networks