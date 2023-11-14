import React from "react";
import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";

const projects = [
  {
    name: "Tracking App",
    img: project1,
  },
  {
    name: "Ecommerce App",
    img: project2,
  },
  {
    name: "Notebook App",
    img: project3,
  },
  {
    name: "Calender App",
    img: project4,
  },
  {
    name: "Tracking App",
    img: project1,
  },
  {
    name: "Ecommerce App",
    img: project2,
  },
  {
    name: "Notebook App",
    img: project3,
  },
  {
    name: "Calender App",
    img: project4,
  },
];
const Project = () => {
  return (
    <>
      <div className="container">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <h1 style={{ color: "white" }}>Discover</h1>
            </Navbar.Brand>
            <div className="d-flex">
              <div className="d-flex">
                <h6 className="m-4">Category</h6>
                <h6 className="m-4">Cheapest</h6>
                <h6 className="m-4">Newest</h6>
              </div>
              <Button
                style={{ backgroundColor: "#9643E3" }}
                variant="secondary"
              >
                Filter
              </Button>
            </div>
          </Container>
        </Navbar>
      </div>
      <Container className="py-5">
        <Row xs={1} md={2} className="g-4">
          {projects.map((project, idx) => (
            <Col key={idx} className="col-lg-3 col-md-6 col-sm-12">
              <Card>
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title style={{ color: "white" }}>
                    {project.name}
                  </Card.Title>
                  <Card.Text>lorem ipsum</Card.Text>
                  <hr></hr>
                  <div className="d-flex">
                    <p>Ends in 1.02.2</p>
                    <Button
                      className="d-flex justify-content-end"
                      variant="outline-secondary"
                    >
                      BID
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Project;
