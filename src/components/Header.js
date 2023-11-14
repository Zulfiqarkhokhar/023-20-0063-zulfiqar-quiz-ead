import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <div className="container text-white">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">FASTECH</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="container">
                <div className="d-flex align-items-center justify-content-center">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">My Profile</Nav.Link>
                  <Nav.Link href="#action3">Activity</Nav.Link>
                  <Nav.Link href="#action4">How It Works</Nav.Link>
                </div>
              </div>
            </Nav>

            <Button className="m-2" variant="outline-success">
              Create
            </Button>
            <Button variant="outline-success">Sign in</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
