import React, { Fragment } from "react";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomChatBot from "./chatbot/CustomChatBot";
const Styles = styled.div`
  .footer-div {
    padding: 0 0;
    background-color: "#41A4F5";
  }

  .blue-bg {
    background-color: "#41A4F5";
  }
`;

const Footer = () => {
  return (
    <Fragment>
      <Styles>
        <div className="footer-div">
          <footer
            className="footer mt-auto py-3 text-white blue-bg"
            style={{ backgroundColor: "#567787" }}
          >
            <Container>
              <Row>
                <Col></Col>
                <Col className="d-flex justify-content-center text-center m-auto">
                  {" "}
                  <Image
                    style={{
                      width: "50px",
                      height: "50px",
                      textalign: "center",
                      verticalAlign: "center",
                      marginTop: "40px",
                      marginBottom: "10px",
                    }}
                    src="https://avatars1.githubusercontent.com/u/45989586?s=400&u=af9fc12c50aad8e49d5a4ae91af15a5edc9be2fb&v=4"
                    roundedCircle
                  />
                </Col>
                <Col></Col>
              </Row>

              <Row style={{ height: "50px" }}>
                {/* <Col></Col> */}
                <Col className="d-flex justify-content-center text-center m-auto">
                  <h1
                    className="lead sub-header"
                    style={{
                      fontWeight: "500",
                      fontFamily: "poppins",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {" "}
                    Interested in a potential project collaboration?
                  </h1>
                </Col>
                {/* <Col></Col> */}
              </Row>
              <Row xs={1} sm={1} style={{ height: "100px" }}>
                <Col xs={1}> </Col>
                <Col xs={10}>
                  <p
                    className="lead sub-header-small"
                    style={{
                      paddingTop: "10px",
                      textAlign: "center",
                      fontWeight: "400",
                      fontFamily: "poppins",
                      letterSpacing: "0.04em",
                    }}
                  >
                    To start an initial chat, just drop me an email at{" "}
                    <u>glendon888@gmail.com </u> or use the form on the contact
                    page.
                  </p>
                  <br></br>
                </Col>
                <Col xs={1}> </Col>
              </Row>
              <Row xs={1} sm={1} style={{ marginBottom: "20px" }}>
                <Col
                  xs={12}
                  className="d-flex justify-content-center text-center m-auto"
                ></Col>
              </Row>
              <CustomChatBot />
            </Container>
          </footer>
        </div>
      </Styles>
    </Fragment>
  );
};

export default Footer;
