import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import finalLogo from "../../assets/images/webbfinal.png"
import { Link } from 'react-router-dom';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{border:"1px solid black"}}>
      <Container>
        <Link to="/" style={{textDecoration:"none"}}>
        <Navbar.Brand href="#home">
          <img src={finalLogo} style={{height:"50px", width:"50px"}}/>Webby Music</Navbar.Brand>
          </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
           <Link to="/create" style={{textDecoration:"none"}}> <Nav.Link href="#create">Create</Nav.Link></Link>
            <Nav.Link eventKey={2} href="#memes">
              Genres
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
