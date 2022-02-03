import {Navbar,Nav,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import './index.css'
import {isMobile} from 'react-device-detect'
import {useState} from 'react'

function Header(){
  const [expanded, setExpanded] = useState(false);
    return (
      <Navbar expanded={expanded} bg="light" expand="md" className='nav-bar'  >
      <Container>
        <Navbar.Brand >22Yards</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} onClick={() => setExpanded(false)} to='/feed'>Feed</Nav.Link>
            <Nav.Link as={Link} onClick={() => setExpanded(false)} to='/networks'>Networks</Nav.Link>
            <Nav.Link as={Link} onClick={() => setExpanded(false)} to='/notifications'>Notifications</Nav.Link>
            <Nav.Link as={Link} onClick={() => setExpanded(false)} to="/newsArticles">News</Nav.Link>
            {
               isMobile && <Nav.Link as={Link} onClick={() => setExpanded(false)} to="/scores">Scores</Nav.Link>
            }
            <Nav.Link as={Link} onClick={() => setExpanded(false)} to='/profile'>Profile</Nav.Link>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header


