import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import social from "../assets/images/social.png";

function Footer() {
  return (
    <Container className="m-5">
      <Row>
        <Col>
          <h1>
            Etiam et id tincidunt faucibus mollis a sociis pretium fermentum
            quis magna faucibus lacus.
          </h1>
        </Col>
        <Col>
          <h1>marketplace</h1>
          <ul
            style={{
              fontSize: "24px",
              listStyle: "none",
              marginBottom: "20px",
            }}
          >
            <li>Home</li>
            <li>Activity</li>
            <li>Discore</li>
            <li>Learn More</li>
          </ul>
        </Col>
        <Col>
          <h1>Company</h1>
          <ul
            style={{
              fontSize: "24px",
              listStyle: "none",
              marginBottom: "20px",
            }}
          >
            <li>About Us</li>
            <li>Service</li>
            <li>Portfolio</li>
          </ul>
        </Col>
        <Col>
          <h1>Contact</h1>
          <ul
            style={{
              fontSize: "24px",
              listStyle: "none",
              marginBottom: "20px",
            }}
          >
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Email</li>
          </ul>
        </Col>
      </Row>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <img src={social} />
        <p>Copyright 2021 Gaslur</p>
      </div>
    </Container>
  );
}

export default Footer;
