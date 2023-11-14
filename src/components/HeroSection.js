import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hero from "../assets/images/hero.png";
import { Button } from "react-bootstrap";

function HeroSection() {
  return (
    <Container>
      <Row>
        <Col className="m-5 d-flex flex-column">
          <h1 className="m-5">
            Discover, collect, and charity in extraordinary NFT marketplace
          </h1>
          <p className="ms-5">
            In aenean posuere lorem risus nec. Tempor tincidunt aenean purus
            purus vestibulum nibh mi venenatis
          </p>
          <div className="d-flex flex-row ms-5">
            <Button className="m-2" variant="outline-success">
              Explore
            </Button>
            <Button className="m-2" variant="outline-success">
              Create
            </Button>
          </div>
        </Col>
        <Col className="m-5">
          <img src={hero} />
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
