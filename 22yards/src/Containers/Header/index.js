import {Navbar,Nav,Container,Button,NavDropdown} from 'react-bootstrap'
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


{/* <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="nav-bar">
<div className='container-fluid' >
<Navbar.Brand as={Link} to="/">22Yards</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
  </Nav>
  <Nav>
    <Nav.Link as={Link} to="/">Feed</Nav.Link>
    <Nav.Link as ={Link} to="notifications">Notifications</Nav.Link>
    <Nav.Link as={Link} to="networks">Networks</Nav.Link>
    <Nav.Link as={Link} to="profile">Profile</Nav.Link>
    <Nav.Link as={Link} to="logout">Logout</Nav.Link>
  </Nav>
</Navbar.Collapse>
</div>
</Navbar> */}