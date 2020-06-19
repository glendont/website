import React, { Fragment, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import { Spring } from "react-spring/renderprops";
import Typing from "react-typing-animation";
import { useSpring, animated } from "react-spring";
import ResizeObserver from "resize-observer-polyfill";

const Styles = styled.div`
  .main-special {
    position: relative;
    height: 36vh;
    width: 100%;
    background: #567786;
    cursor: pointer;
    overflow: hidden;
    padding-top: 2%;
    padding-bottom: 2%;
  }

  .header {
  }
  .textContainer {
    justify-content: center;
    padding: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .text {
    font-family: "Open Sans";
  }
`;

function useMeasure() {
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => (ro.observe(ref.current), ro.disconnect), []);
  return [{ ref }, bounds];
}

const IntroHeader = () => {
  const [open, toggle] = useState(false);
  const [bind, { width }] = useMeasure();
  const props = useSpring({ width: open ? width : 0 });
  return (
    <Fragment>
      <Styles>
        <div
          {...bind}
          class="main-special"
          onMouseEnter={() => toggle(!open)}
          onMouseLeave={() => toggle(!open)}
        >
          <animated.div class="fill-special" style={props} />
          <animated.div class="content-special">
            {/* <div className="header"> */}
            <Container
              fluid
              // style={{ backgroundColor: "#567787", padding: "2rem" }}
            >
              <Row className="justify-content-md-center">
                {/* <Col xs= {0} sm={2} md={1} lg={1} xl={1}></Col> */}
                <Col xs={0} sm={0} md={1} lg={0} xl={2}></Col>
                <Col
                  xs={7}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  className="d-flex justify-content-center text-center m-auto"
                >
                  {/* <Col xs={4} sm={3} md={0} lg={0} xl={0}></Col> */}
                  <Image
                    className="header-round-image"
                    // style={{
                    //   width: "90%",
                    //   height: "90%",
                    //   textalign: "center",
                    //   verticalAlign: "center",
                    //   marginRight: "-25px",
                    //   marginLeft: "25px",
                    // }}
                    src="https://avatars1.githubusercontent.com/u/45989586?s=400&u=af9fc12c50aad8e49d5a4ae91af15a5edc9be2fb&v=4"
                    roundedCircle
                  />{" "}
                </Col>

                <Col xs={12} sm={6} md={7} lg={7} xl={6}>
                  <div
                    className="textContainer header-words-hey"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <div className="lead text-white ">
                      {" "}
                      <h5 className="header-words-hey">
                        {" "}
                        Hey there! My name is
                      </h5>{" "}
                    </div>

                    <h2
                      className="mt-0 display-4 font-weight-bold text-white header-words-name"
                      // className="mt-0 display-4 font-weight-bold text-white animate__animated animate__headShake"
                      // style={{
                      //   fontFamily: "Poppins",
                      //   fontWeight: "normal",
                      //   textShadow: "0px 1px, 1px 0px, 1px 1px",
                      //   letterSpacing: "0.003em",
                      //   color: "#102A42",
                      //   fontSize: "55px",
                      // }}
                    >
                      {" "}
                      <Typing>
                        {" "}
                        Glendon Thaiw,
                        <Typing.Delay ms={2000} />
                      </Typing>
                    </h2>

                    <p className="lead text-white-50 header-words-para">
                      A computer science <u> sophomore</u> from the Renaissance
                      Engineering Programme at Nanyang Technological University.
                      I am extremely fascinated by the intersection between
                      Technology and Business.{" "}
                    </p>

                    <Link to="/contact">
                      {" "}
                      <button
                        type="button"
                        class="btn btn-lg "
                        style={{
                          backgroundColor: "#46616E",
                          fontFamily: "poppins",
                          color: "white",
                        }}
                      >
                        Let's Build!
                      </button>
                    </Link>
                  </div>
                </Col>
                <Col xs={0} sm={3} md={1} lg={1} xl={2}></Col>
              </Row>
            </Container>
            {/* </div> */}
          </animated.div>
        </div>
      </Styles>
    </Fragment>
  );
};

export default IntroHeader;
