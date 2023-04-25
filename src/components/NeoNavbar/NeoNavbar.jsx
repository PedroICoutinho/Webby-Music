import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import webbyLogo from "../../assets/images/webby-logo.png"

function ColorSchemesExample() {
  return (
    <>
      <Navbar style={{backgroundColor:"#ffffff"}}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={webbyLogo} alt="" style={{height:"100px", width:"100px"}} /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Charts</Nav.Link>
            <Nav.Link href="#pricing">Genres</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;