import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import { Tooltip as tooltip, OverlayTrigger, Button } from "react-bootstrap";
import styled from "@emotion/styled/macro";
import { Animated } from "react-animated-css";
import { ProjectDialog } from "./ProjectDialog";
import { useHoverLeave } from "./customHooks/useHoverLeave";
import { useWindowDimensions } from "./customHooks/useWindowDimensions";
import Internships from "./Internships";
import seagateImage from "./intern_seagate.jpg";
import deloitteImage from "./intern_deloitte.jpg";
import dstaImage from "./intern_dsta.jpg";
import amazonImage from "./intern_amazon.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardColumns from "react-bootstrap/CardColumns";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";

const FeaturedInternships = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingBottom: "30px",
      }}
    >
      <Fragment>
        <Container>
          <Row>
            <Col>
              <h1
                style={{
                  textAlign: "center",
                  paddingTop: "50px",
                  fontFamily: "Poppins",
                  textShadow: "0px 1px, 1px 0px, 1px 1px",
                  fontWeight: "bold",
                  letterSpacing: "0.05em",
                  color: "#102A42",
                }}
              >
                Featured Internships
              </h1>
              <p
                className="lead text"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  letterSpacing: "0.001em",
                  textAlign: "justify",
                  marginTop: "30px",
                  marginBottom: "30px",
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

          <Row style={{ paddingTop: "20px" }}>
            <Col sm={0} lg={1}>
              {" "}
            </Col>
            <Col
              className="d-flex justify-content-center center-block d-block m-auto"
              xs={12}
              lg={5}
              style={{ paddingBottom: "20px", width: "45vw" }}
            >
              <Card
                style={{
                  width: "45vw",
                  paddingBottom: "20px",
                  height: "325px",
                }}
              >
                <Internships
                  css="projectIndividualBox"
                  image={amazonImage}
                  company="Amazon Web Services"
                  department="Digital Customers and Regional Expansion"
                  role="Software Engineering Intern"
                  description="A one-stop site to assist couples with choosing their Build To Order flat."
                  tools="MongoDB, Express, React, NodeJS"
                  para1="This is what the project is about"
                  link="https://github.com/Larrystamford/"
                  date="Aug 2020 - Current"
                  contributions_1="Coming Soon"
                />

                <Card.Body>
                  <Card.Title>
                    <h1
                      className="lead"
                      style={{
                        textAlign: "left",
                        marginLeft: "5px",
                        fontVariant: "bold",
                      }}
                    >
                      {" "}
                      <b> Software Engineering Intern </b>
                    </h1>{" "}
                    <p
                      className="lead intern-text"
                      style={{ fontSize: "12px" }}
                    >
                      {" "}
                      <AccessAlarmsIcon
                        fontSize="small"
                        style={{
                          fontSize: "15px",
                          marginBottom: "2px",
                          marginLeft: "3px",
                        }}
                      />{" "}
                      {"  "} Aug 2020 - Current
                    </p>{" "}
                  </Card.Title>

                  <Card.Text style={{ textAlign: "left" }}></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              className="d-flex justify-content-center center-block d-block m-auto"
              xs={12}
              lg={5}
              style={{ paddingBottom: "20px", width: "45vw" }}
            >
              <Card
                style={{
                  width: "45vw",
                  paddingBottom: "20px",
                  height: "325px",
                }}
              >
                <Internships
                  css="projectIndividualBox"
                  image={seagateImage}
                  company="Seagate Technology"
                  department="Analytics Business Solutions"
                  role="Software Engineering Intern"
                  description="A one-stop site to assist couples with choosing their Build To Order flat."
                  tools="MongoDB, Express, React, NodeJS"
                  para1="This is what the project is about"
                  link="https://github.com/Larrystamford/"
                  date="May 2020 - Aug 2020"
                  contributions_1="Built a big data network packet analysis tool with the Elastic Stack (Elasticsearch, Logstash, Kibana) beats framework"
                  contributions_2="Optimized mass hard drives testing on an international collaboration with Seagate Thailand"
                />

                <Card.Body>
                  <Card.Title>
                    <h1
                      className="lead"
                      style={{
                        textAlign: "left",
                        marginLeft: "5px",
                        fontVariant: "bold",
                      }}
                    >
                      {" "}
                      <b> Software Engineering Intern </b>
                    </h1>{" "}
                    <p
                      className="lead intern-text"
                      style={{ fontSize: "12px" }}
                    >
                      {" "}
                      <AccessAlarmsIcon
                        fontSize="small"
                        style={{
                          fontSize: "15px",
                          marginBottom: "2px",
                          marginLeft: "3px",
                        }}
                      />{" "}
                      {"  "}May 2020 - Aug 2020
                    </p>{" "}
                  </Card.Title>

                  <Card.Text style={{ textAlign: "left" }}></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={0} lg={1}></Col>
          </Row>
          <Row style={{ paddingTop: "20px" }}>
            <Col sm={0} lg={1}></Col>
            <Col
              className="d-flex justify-content-center center-block d-block m-auto"
              xs={12}
              lg={5}
              style={{ paddingBottom: "20px", width: "45vw" }}
            >
              <Card
                style={{
                  width: "45vw",
                  paddingBottom: "20px",
                  height: "325px",
                }}
              >
                <Internships
                  css="projectIndividualBox"
                  image={deloitteImage}
                  company="Deloitte Consulting"
                  department="Strategic Risk"
                  role="Data Science Intern"
                  description="A one-stop site to assist couples with choosing their Build To Order flat."
                  tools="MongoDB, Express, React, NodeJS"
                  para1="This is what the project is about"
                  link="https://github.com/Larrystamford/"
                  date="Dec 2019 - May 2020"
                  contributions_1="Derived data-driven insights using data science tools to analyze key trends in businesses across market sectors"
                  contributions_2="Analyzed causalrelationships through Structural Equation Modelling with R"
                  contributions_3="Built and deployed dynamic live dashboards for effective data
                  visualization for different stakeholders"
                  contributions_4="Built a production Recommender System through Latent
                  Feature Modelling with dimensionality reduction techniques"
                  contributions_5="• Deployed Random Forest Regression models to draw insights
                  regarding patient experience for a local hospital"
                />

                <Card.Body>
                  <Card.Title>
                    <h1
                      className="lead"
                      style={{
                        textAlign: "left",
                        marginLeft: "5px",
                        fontVariant: "bold",
                      }}
                    >
                      {" "}
                      <b> Data Science Intern </b>
                    </h1>{" "}
                    <p
                      className="lead intern-text"
                      style={{ fontSize: "12px" }}
                    >
                      {" "}
                      <AccessAlarmsIcon
                        fontSize="small"
                        style={{
                          fontSize: "15px",
                          marginBottom: "2px",
                          marginLeft: "3px",
                        }}
                      />{" "}
                      {"  "} Dec 2019 - May 2020
                    </p>{" "}
                  </Card.Title>

                  <Card.Text style={{ textAlign: "left" }}></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              className="d-flex justify-content-center center-block d-block m-auto"
              xs={12}
              lg={5}
              style={{ paddingBottom: "20px", width: "45vw" }}
            >
              <Card
                style={{
                  width: "45vw",
                  paddingBottom: "20px",
                  height: "325px",
                }}
              >
                <Internships
                  css="projectIndividualBox"
                  image={dstaImage}
                  company="Defence Science Technology Agency"
                  department="Advanced Systems"
                  role="Software Engineering Intern"
                  description="A one-stop site to assist couples with choosing their Build To Order flat."
                  tools="MongoDB, Express, React, NodeJS"
                  para1="This is what the project is about"
                  link="https://github.com/Larrystamford/"
                  date="Dec 2018 - Feb 2019"
                  contributions_1="Developed a virtual chatbot to facilitate Natural Language
                  Processing (NLP) for both batch and live inputs"
                  contributions_2="Integrated open-source systems incorporating technologies
                  such as DialogFlow, Heroku, Github and Integromat"
                  contributions_3="Evaluated open-source vocal analysis APIs on reliability,
                  accuracy and robustness"
                />

                <Card.Body>
                  <Card.Title>
                    <h1
                      className="lead"
                      style={{
                        textAlign: "left",
                        marginLeft: "5px",
                        fontVariant: "bold",
                      }}
                    >
                      {" "}
                      <b> Software Engineering Intern </b>
                    </h1>{" "}
                    <p
                      className="lead intern-text"
                      style={{ fontSize: "12px" }}
                    >
                      {" "}
                      <AccessAlarmsIcon
                        fontSize="small"
                        style={{
                          fontSize: "15px",
                          marginBottom: "2px",
                          marginLeft: "3px",
                        }}
                      />{" "}
                      {"  "} Dec 2018 - Feb 2019
                    </p>{" "}
                  </Card.Title>

                  <Card.Text style={{ textAlign: "left" }}></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={0} lg={1}></Col>
          </Row>
        </Container>
      </Fragment>
    </div>
  );
};

export default FeaturedInternships;
