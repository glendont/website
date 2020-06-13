import React, { Fragment } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";

const ContactComponent = () => {
  const activateForm = () => {
    alert("Thanks for reaching out!");
  };
  return (
    <Fragment>
      <div className="contact-component-div">
        <footer className="footer mt-auto py-3 text-white blue-bg">
          <Container style={{ height: "865px" }}>
            <Row style={{ padding: "50px" }}>
              <Col className="d-flex justify-content-center text-center m-auto">
                <Image
                  style={{
                    width: "120px",
                    height: "120px",
                    textalign: "center",
                    verticalAlign: "center",
                    marginTop: "-20px",
                    marginBottom: "-20px",
                  }}
                  src="https://avatars1.githubusercontent.com/u/45989586?s=400&u=af9fc12c50aad8e49d5a4ae91af15a5edc9be2fb&v=4"
                  roundedCircle
                />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center text-center m-auto">
                <Card
                  style={{
                    width: "50vw",
                    padding: "2%",
                  }}
                >
                  <Card.Body>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ textAlign: "left" }}
                    >
                      I'm currently taking on freelance work. If you are
                      interested in hiring me for your project please use the
                      form below to get in touch. Want to know how I work and
                      what I can offer? Check out my project case studies and
                      resume.
                    </Card.Subtitle>
                    <br />
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ textAlign: "center" }}
                    >
                      You can also find me on the following channels
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>

                    <Card.Link href="https://www.linkedin.com/in/glendonthaiw/">
                      {" "}
                      <LinkedInIcon
                        fontSize="large"
                        style={{ color: "#41A4F4" }}
                      />
                    </Card.Link>
                    <Card.Link href="https://github.com/glendont">
                      {" "}
                      <GitHubIcon
                        fontSize="large"
                        style={{ color: "#41A4F4" }}
                      />
                    </Card.Link>

                    <Card.Link href="mailto:glendon888@gmail.com">
                      {" "}
                      <AlternateEmailIcon
                        fontSize="large"
                        style={{ color: "#41A4F4" }}
                      />
                    </Card.Link>
                    <Card.Link href="/">
                      {" "}
                      <LocalPhoneIcon
                        fontSize="large"
                        style={{ color: "#41A4F4" }}
                      />
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row
              style={{
                paddingLeft: "109px",
                paddingRight: "109px",
                paddingTop: "20px",
              }}
            >
              <Col>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Name" />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row style={{ paddingLeft: "109px", paddingRight: "109px" }}>
              <Col>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      as="textarea"
                      rows="6"
                      type="text"
                      placeholder="Enter your message..."
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row style={{ paddingLeft: "109px", paddingRight: "109px" }}>
              <Col>
                <Button
                  variant="primary"
                  onClick={activateForm}
                  style={{
                    width: "100%",
                    paddingTop: "10px",
                    backgroundColor: "#41A4F5",
                  }}
                >
                  Send
                </Button>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </Fragment>
  );
};

export default ContactComponent;
