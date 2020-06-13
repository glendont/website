import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import { Tooltip as tooltip, OverlayTrigger, Button } from "react-bootstrap";
import styled from "@emotion/styled/macro";
import { Animated } from "react-animated-css";

import { ProjectDialog } from "./ProjectDialog";
import { useHoverLeave } from "./customHooks/useHoverLeave";
import { useWindowDimensions } from "./customHooks/useWindowDimensions";
import Projects from "./Projects";

import seagateImage from "./intern_seagate.jpg";
import deloitteImage from "./intern_deloitte.jpg";
import dstaImage from "./intern_dsta.jpg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardColumns from "react-bootstrap/CardColumns";

const FeaturedProjects = () => {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <Fragment>
        <Container>
          <Row>
            <Col>
              <h1
                style={{
                  textAlign: "center",
                  paddingTop: "50px",
                  fontFamily: "Roboto",
                  fontWeight: "650",
                  letterSpacing: "0.05em",
                  color: "#102A42",
                }}
              >
                Featured Projects
              </h1>
              <p
                className="lead text"
                style={{
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
            <Col
              className="d-flex justify-content-center center-block d-block m-auto"
              xs={12}
              sm={12}
              md={12}
              lg={4}
              style={{ paddingBottom: "20px" }}
            >
              <Card
                style={{
                  width: "330px",
                  paddingBottom: "20px",
                  height: "380px",
                }}
              >
                <Projects
                  css="projectIndividualBox"
                  image="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  title="BTOAnywhere"
                  short_desc="A one-stop site to assist couples with choosing their Build To Order flat"
                  tools="MongoDB, Express, React, NodeJS"
                  para1="This is what the project is about"
                  link="https://github.com/Larrystamford/"
                />
                <Card.Body>
                  <Card.Title>
                    <h1 className="lead" style={{ textAlign: "center" }}>
                      {" "}
                      BTOAnywhere
                    </h1>{" "}
                  </Card.Title>

                  <Card.Text style={{ textAlign: "center" }}>
                    <span class="badge badge-pill badge-secondary">
                      ReactJS
                    </span>
                    {"    "}
                    {"    "}
                    {"    "}
                    <span class="badge badge-pill badge-secondary">Node</span>
                    {"    "}
                    {"    "}
                    {"    "}
                    <span class="badge badge-pill badge-secondary">
                      MongoDB
                    </span>
                    {"    "}
                    {"    "}
                    {"    "}
                    <span class="badge badge-pill badge-secondary">
                      Express
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              className="d-flex justify-content-center center-block d-block m-auto"
              xs={12}
              sm={12}
              md={12}
              lg={4}
              style={{ paddingBottom: "20px" }}
            >
              <Card
                style={{
                  width: "330px",
                  paddingBottom: "20px",
                  height: "380px",
                }}
              >
                <Projects
                  css="projectIndividualBox"
                  image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  title="Competitors Generator"
                  short_desc="A web application to discover competitor companies using machine learning algorithms"
                  tools="MongoDB, Express, React, NodeJS"
                  para1="This is what the project is about"
                  link="https://github.com/Larrystamford/"
                />

                <Card.Body>
                  <Card.Title>
                    <h1 className="lead" style={{ textAlign: "center" }}>
                      {" "}
                      Competitors Generator
                    </h1>{" "}
                  </Card.Title>

                  <Card.Text style={{ textAlign: "center" }}>
                    <span class="badge badge-pill badge-secondary">Django</span>
                    {"    "}
                    {"    "}
                    {"    "}
                    <span class="badge badge-pill badge-secondary">
                      Machine Learning
                    </span>
                    {"    "}
                    {"    "}
                    {"    "}
                    <span class="badge badge-pill badge-secondary">Pickle</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              className="d-flex justify-content-center center-block d-block m-auto"
              xs={12}
              sm={12}
              md={12}
              lg={4}
              style={{ paddingBottom: "20px" }}
            >
              <Card
                style={{
                  width: "330px",
                  paddingBottom: "20px",
                  height: "380px",
                }}
              >
                <Projects
                  css="projectIndividualBox"
                  image="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
                  title="Cyber Security Dashboard"
                  short_desc="Dashboard for cybersecurity practitioners to evaluate common vulnerabilities using machine learning."
                  tools="MongoDB, Express, React, NodeJS"
                  para1="This is what the project is about"
                  link="https://github.com/Larrystamford/"
                />

                <Card.Body>
                  <Card.Title>
                    <h1 className="lead" style={{ textAlign: "center" }}>
                      {" "}
                      Cyber Security Dashboard
                    </h1>{" "}
                  </Card.Title>

                  <Card.Text style={{ textAlign: "center" }}>
                    <span class="badge badge-pill badge-secondary">
                      ReactJS
                    </span>
                    {"    "}
                    {"    "}
                    {"    "}
                    <span class="badge badge-pill badge-secondary">Flask</span>
                    {"    "}
                    {"    "}
                    {"    "}
                    <span class="badge badge-pill badge-secondary">
                      Data Science
                    </span>
                    {"    "}
                    {"    "}
                    {"    "}
                    <span class="badge badge-pill badge-secondary">NLP</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
            <a href="/projects">
              {" "}
              <button
                href="/projects"
                type="button"
                class="btn btn-lg btn-primary"
                style={{
                  backgroundColor: "#41A4F5",
                  padding: "9px",
                  paddingBottom: "2px",
                  paddingTop: "2px",
                }}
              >
                View all Projects
              </button>
            </a>
          </Row>
        </Container>
      </Fragment>
    </div>
  );
};

export default FeaturedProjects;
