import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Projects from "./Projects";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FeaturedProjects = () => {
  let tags_1 = ["ReactJS", "Node", "MongoDB", "Express"];
  let tags_2 = ["Django", "Machine Learning", "Pickle"];
  let tags_3 = ["ReactJS", "Flask", "Data Science", "NLP"];

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
                  fontFamily: "Poppins",
                  textShadow: "0px 1px, 1px 0px, 1px 1px",
                  fontWeight: "bold",
                  letterSpacing: "0.05em",
                  color: "#102A42",
                }}
              >
                Featured Projects
              </h1>
              <p
                className="lead text"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  textAlign: "center",
                  marginTop: "30px",
                  marginBottom: "30px",
                  letterSpacing: "0.05em",
                  fontSize: "22px",
                }}
              >
                Always on the hunt for unique and meaningful applications of
                technology{" "}
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
                  link="https://github.com/johann95ko/btoExpressApp"
                  web="https://btoanywhere.herokuapp.com/"
                  tags={tags_1}
                  description="This project aims to assist newly-wed/young couples in Singapore with their BTO (build-to-order) application by providing them with a one-stop-shop of all relevant and important information about purchasing a BTO flat in Singapore."
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
                  tags={tags_2}
                  link="https://github.com/glendont/company-recommender-system"
                  web="https://companyrecommendersystem.herokuapp.com/"
                  description="On the Data Science arena, PCA and T-SNE was implemented for dimensionality reduction as well as latent feature engineering. The latent features are then clustered using the K-Nearest-Neighbors (KNN) algorithms in order to generate the more similar data points. The machine learning model is encapsulated into a back-end API using the Django web development framework. When used in conjunction with a front-end user interface, it allows users to input key characteristics of their company, and get competitor companies returned to them."
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
                  link="https://github.com/cy002/UBS"
                  web="none"
                  tags={tags_3}
                  description="In collaboration with UBS and Nanyang Technological University through the NTU EDGE programme, this project aims to incorporate Machine Learning and Natural Language Processing (NLP) in the analysis of Common Vulnerabilities and Exposures (CVE) to develop an Organization Vulnerability Risk Assessment Model. The end-product is a full-stack dashboard which allows cybersecurity practitioners to provide key inputs in order to generate recommendations on cybersecurity remediation. As a proof of concept, open-source datasets provided by the National Vulnerability Database (NVD) was used to train our machine learning model."
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
          <Row style={{ justifyContent: "center", paddingTop: "10px" }}>
            <Link to="/projects">
              {" "}
              <button
                href="/projects"
                type="button"
                class="btn btn-lg"
                style={{
                  backgroundColor: "#567787",
                  padding: "9px",
                  paddingBottom: "2px",
                  paddingTop: "2px",
                  color: "white",
                }}
              >
                View all Projects
              </button>
            </Link>
          </Row>
        </Container>
      </Fragment>
    </div>
  );
};

export default FeaturedProjects;
