import React, { Fragment, useState } from "react";
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
import axios from "axios";

const ContactComponent = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const nameChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setName(e.target.value);
  };

  const emailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    e.preventDefault();
  };

  const messageChange = (e) => {
    console.log(e.target.value);
    setMessage(e.target.value);
    e.preventDefault();
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const activateForm = (e) => {
    axios
      .post(
        "https://formcarry.com/s/GVcGpJFGuxxo",
        {
          name: name,
          email: email,
          message: message,
        },
        { headers: { Accept: "application/json" } }
      )
      .then(function(response) {
        console.log(response);
        clearForm();
        alert("Thanks for reaching out!");
      })
      .catch(function(error) {
        console.log(error);
      });

    e.preventDefault();
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
                    width: "52vw",
                    padding: "2%",
                  }}
                >
                  <Card.Body>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{
                        padding: "2%",
                        textAlign: "center",
                        fontWeight: "700",
                        fontFamily: "poppins",
                        letterSpacing: "0.05em",
                      }}
                    >
                      A potential project collaboration or just a chat over
                      coffee?
                    </Card.Subtitle>
                    <br />
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{
                        textAlign: "center",
                        fontWeight: "900",
                        fontFamily: "poppins",
                        letterSpacing: "0.08em",
                        marginBottom: "5px",
                      }}
                    >
                      <p style={{ paddingBottom: "2px" }}>
                        {" "}
                        You can also find me on the following channels
                      </p>
                    </Card.Subtitle>

                    <Card.Link href="https://www.linkedin.com/in/glendonthaiw/">
                      {" "}
                      <LinkedInIcon
                        fontSize="large"
                        style={{ color: "#2E4049" }}
                      />
                    </Card.Link>
                    <Card.Link href="https://github.com/glendont">
                      {" "}
                      <GitHubIcon
                        fontSize="large"
                        style={{ color: "#2E4049" }}
                      />
                    </Card.Link>

                    <Card.Link href="mailto:glendon888@gmail.com">
                      {" "}
                      <AlternateEmailIcon
                        fontSize="large"
                        style={{ color: "#2E4049" }}
                      />
                    </Card.Link>
                    <Card.Link href="/website">
                      {" "}
                      <LocalPhoneIcon
                        fontSize="large"
                        style={{ color: "#2E4049" }}
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
                    <Form.Control
                      type="email"
                      placeholder="Name"
                      onChange={nameChange}
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      onChange={emailChange}
                    />
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
                      onChange={messageChange}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row style={{ paddingLeft: "109px", paddingRight: "109px" }}>
              <Col>
                <button
                  type="button"
                  class="btn btn-lg"
                  onClick={activateForm}
                  style={{
                    width: "100%",
                    paddingTop: "10px",
                    backgroundColor: "#567787",
                    color: "white",
                  }}
                >
                  Send
                </button>

                {/* <Button
                  className="btn btn-lg"
                  onClick={activateForm}
                  style={{
                    width: "100%",
                    paddingTop: "10px",
                    backgroundColor: "#567787",
                  }}
                >
                  Send
                </Button> */}
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </Fragment>
  );
};

export default ContactComponent;
