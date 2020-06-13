import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import datascienceicon from "./datasci.png";
import CheckIcon from "@material-ui/icons/Check";

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
  return (
    <Fragment>
      <Styles>
        <div className="header">
          <Container>
            <Row>
              <Col>
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
                    letterSpacing: "0.001em",
                    textAlign: "justify",
                    paddingBottom: "20px",
                  }}
                >
                  {" "}
                  I have more than 8 years' experience building rich web
                  applications for clients all over the world. Below is a quick
                  overview of my main technical skill sets and tools I use. Want
                  to find out more about my experience? Check out my online
                  resume.
                </p>
              </Col>
            </Row>

            <Row style={{ paddingBottom: "30px" }}>
              <Col
                className="d-flex justify-content-center center-block d-block m-auto"
                xs={12}
                sm={12}
                md={4}
                style={{ paddingBottom: "20px" }}
              >
                <Card style={{ width: "23rem", paddingBottom: "20px" }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
                    <Card.Text style={{ textAlign: "justify" }}>
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
                </Card>
              </Col>
              <Col
                className="d-flex justify-content-center center-block d-block m-auto"
                xs={12}
                sm={12}
                md={4}
                style={{ paddingBottom: "20px" }}
              >
                <Card style={{ width: "23rem", paddingBottom: "20px" }}>
                  {" "}
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
                    <Card.Text style={{ textAlign: "justify" }}>
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
                </Card>
              </Col>
              <Col
                className="d-flex justify-content-center center-block d-block m-auto"
                xs={12}
                sm={12}
                md={4}
                style={{ paddingBottom: "20px" }}
              >
                <Card style={{ width: "23rem", paddingBottom: "20px" }}>
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
                    <Card.Text style={{ textAlign: "justify" }}>
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
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Styles>
    </Fragment>
  );
};

export default SkillsOverview;
