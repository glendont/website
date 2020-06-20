import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Styles = styled.div`
  .header {
    background-color: #f7f8fa;
    padding-bottom: 25px;
  }

  .text {
    // font-family: "Open Sans";
  }
`;

const SkillsOverview = () => {
  const [props_1, set_1] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const [props_2, set_2] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const [props_3, set_3] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <Fragment>
      <Styles>
        <div className="header">
          <Container>
            <Row>
              <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col>
              <Col xs={10} sm={10} lg={12}>
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: "40px",
                    paddingBottom: "20px",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    textShadow: "0px 1px, 1px 0px, 1px 1px",
                    letterSpacing: "0.05em",
                    color: "#102A42",
                  }}
                >
                  Skills Overview
                </h1>
                <p
                  className="lead text"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    textAlign: "center",
                    paddingBottom: "20px",
                    letterSpacing: "0.05em",
                    fontSize: "22px",
                  }}
                >
                  {" "}
                  Tools of the trade - here are some I gathered through my
                  different works and experiences{" "}
                </p>
              </Col>
              <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col>
            </Row>

            <Row style={{ paddingBottom: "30px" }}>
              {/* <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col> */}
              <Col
                className="d-flex justify-content-center center-block d-block m-auto"
                xs={10}
                sm={10}
                md={12}
                lg={4}
                xl={4}
                style={{ paddingBottom: "20px" }}
              >
                <animated.div
                  class="card-special-web"
                  onMouseMove={({ clientX: x, clientY: y }) =>
                    set_1({ xys: calc(x, y) })
                  }
                  onMouseLeave={() => set_1({ xys: [0, 0, 1] })}
                  style={{ transform: props_1.xys.interpolate(trans) }}
                />

                {/* <Card style={{ width: "23rem", paddingBottom: "20px" }}>
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                      <p> Web Development </p>
                      <Image
                        style={{
                          width: "50px",
                          height: "50px",
                          textalign: "center",
                          verticalAlign: "center",
                        }}
                        src="https://cdn.iconscout.com/icon/free/png-512/data-science-46-1170621.png"
                        roundedCircle
                      />
                    </Card.Title>
                    <Card.Text
                      className="skills-text"
                      style={{ textAlign: "justify" }}
                    >
                      <ul style={{ listStyle: "none" }}>
                        <br></br>
                        <li>
                          {" "}
                          <CheckIcon /> ReactJS{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Javascript{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Django{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Flask{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> HTML/CSS3{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> ExpressJS{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> NodeJS{" "}
                        </li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card> */}
              </Col>
              {/* <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col> */}
              {/* <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col> */}

              <Col
                className="d-flex justify-content-center center-block d-block m-auto"
                xs={10}
                sm={10}
                md={12}
                lg={4}
                style={{ paddingBottom: "20px" }}
              >
                <animated.div
                  class="card-special-datasci"
                  onMouseMove={({ clientX: x, clientY: y }) =>
                    set_2({ xys: calc(x, y) })
                  }
                  onMouseLeave={() => set_2({ xys: [0, 0, 1] })}
                  style={{ transform: props_2.xys.interpolate(trans) }}
                />
                {/* <Card style={{ width: "23rem", paddingBottom: "20px" }}>
                  {" "}
     
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                      <p> Data Science</p>
                      <Image
                        style={{
                          width: "55px",
                          height: "50px",
                          textalign: "center",
                          verticalAlign: "center",
                        }}
                        src={datascienceicon}
                      />
                    </Card.Title>
                    <Card.Text
                      className="skills-text"
                      style={{ textAlign: "justify" }}
                    >
                      <ul style={{ listStyle: "none" }}>
                        <br></br>
                        <li>
                          {" "}
                          <CheckIcon /> Exploratory Analysis{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Regression Analysis{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Clustering Analysis{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Neural Networks
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Causal Analysis{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Factor Analysis{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Model Deployments{" "}
                        </li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card> */}
              </Col>
              {/* <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col> */}
              {/* <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col> */}

              <Col
                className="d-flex justify-content-center center-block d-block m-auto"
                xs={10}
                sm={10}
                md={12}
                lg={4}
                style={{ paddingBottom: "20px" }}
              >
                <animated.div
                  class="card-special-others"
                  onMouseMove={({ clientX: x, clientY: y }) =>
                    set_3({ xys: calc(x, y) })
                  }
                  onMouseLeave={() => set_3({ xys: [0, 0, 1] })}
                  style={{ transform: props_3.xys.interpolate(trans) }}
                />
                {/* <Card style={{ width: "23rem", paddingBottom: "20px" }}>
                  {" "}
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                      <p> Others </p>
                      <Image
                        style={{
                          width: "50px",
                          height: "50px",
                          textalign: "center",
                          verticalAlign: "center",
                        }}
                        src="https://dzone.com/storage/temp/12438372-elasticsearch-color-cmyk.jpg"
                        roundedCircle
                      />
                    </Card.Title>
                    <Card.Text
                      className="skills-text"
                      style={{ textAlign: "justify" }}
                    >
                      <ul style={{ listStyle: "none" }}>
                        <br></br>
                        <li>
                          {" "}
                          <CheckIcon /> Elastic Stack{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Kibana{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Logstash{" "}
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> PySpark / Hadoop
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Amazon Web Services
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Linux / CentOS
                        </li>
                        <li>
                          {" "}
                          <CheckIcon /> Data Engineering{" "}
                        </li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card> */}
              </Col>
              {/* <Col xs={1} sm={1} md={0} lg={0} xl={0}></Col> */}
            </Row>
          </Container>
        </div>
      </Styles>
    </Fragment>
  );
};

export default SkillsOverview;
