import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import glendonpic from "./profilepic.png";
const Styles = styled.div`
  .header {
    background-color: green;
  }
  .textContainer {
    padding: 10%;
    // margin-top: -7%;
    // background-color: blue;
  }

  .text {
    font-family: "Open Sans";
  }
`;

const IntroHeader = () => {
  return (
    <Fragment>
      <Styles>
        <div className="header">
          <Container
            fluid
            style={{ backgroundColor: "#41A4F5", padding: "2rem" }}
          >
            <Row className="justify-content-md-center">
              <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
              <Col xs={0} sm={0} md={0} lg={0} xl={2}></Col>
              <Col
                xs={4}
                sm={5}
                md={3}
                lg={3}
                xl={1}
                className="d-flex justify-content-center text-center m-auto"
              >
                <Image
                  style={{
                    width: "300%",
                    height: "300%",
                    textalign: "center",
                    verticalAlign: "center",
                  }}
                  src="https://avatars1.githubusercontent.com/u/45989586?s=400&u=af9fc12c50aad8e49d5a4ae91af15a5edc9be2fb&v=4"
                  roundedCircle
                />{" "}
              </Col>

              <Col xs={12} sm={7} md={8} lg={7} xl={6}>
                <div className="textContainer" style={{ fontFamily: "roboto" }}>
                  <div className="lead text-white">
                    {" "}
                    <h5> Hey there! My name is</h5>{" "}
                  </div>

                  <h2 className="mt-0 display-4 font-weight-bold text-white animate__animated animate__headShake">
                    {" "}
                    Glendon Thaiw,{" "}
                  </h2>

                  <p className="lead text-white-50">
                    A computer science sophmore from the Renaissance Engineering
                    Programme at Nanyang Technological University. I am
                    extremely fascinated by the intersection between Technology
                    and Business.{" "}
                  </p>
                  <a href="/contact">
                    <button
                      type="button"
                      class="btn btn-lg btn-primary"
                      style={{ backgroundColor: "#0A71C6" }}
                    >
                      Contact Me
                    </button>
                  </a>
                </div>
              </Col>
              <Col xs={0} sm={0} md={1} lg={1} xl={2}></Col>
            </Row>
          </Container>
        </div>
      </Styles>
    </Fragment>
  );
};

export default IntroHeader;
