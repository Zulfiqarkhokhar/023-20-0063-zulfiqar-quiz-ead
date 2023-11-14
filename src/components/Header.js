import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div style={{ color: "white" }} className="container">
      <Navbar expand="lg" className=" text-white">
        <Container fluid>
          <Navbar.Brand style={{ color: "white" }} href="#">
            FASTECH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="container text-white">
                <div className="d-flex align-items-center justify-content-center">
                  <Nav.Link style={{ color: "white" }} href="#action1">
                    Home
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }} href="#action2">
                    My Profile
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }} href="#action3">
                    Activity
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }} href="#action4">
                    How It Works
                  </Nav.Link>
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
