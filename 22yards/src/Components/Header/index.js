import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import './index.css'
function Header(){
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="nav-bar">
        <Container>
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
        </Container>
      </Navbar>
    )
}

export default Header