import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";

const Styles = styled.div`
  .navbar {
    background-color: #2e4049;
    // padding: 5px;
    padding-left: 2%;
    padding-right: 2%;
    width: 100%;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    font-family: poppins;
    color: white;
    font-size: 20px;

    &:hover {
      font-family: poppins;
      color: #bbb;
    }
  }
`;

const NavigationBar = () => (
  <Styles>
    <Navbar>
      <Navbar.Brand href="https://www.linkedin.com/in/glendonthaiw/">
        <LinkedInIcon fontSize="medium" />
      </Navbar.Brand>

      <Navbar.Brand href="https://github.com/glendont">
        <GitHubIcon fontSize="small" />
      </Navbar.Brand>

      <Navbar.Brand href="mailto:glendon888@gmail.com">
        <AlternateEmailIcon fontSize="medium" />
      </Navbar.Brand>

      <Navbar.Brand href="/contact">
        <LocalPhoneIcon fontSize="medium" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/projects">Projects</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item
            style={{
              marginTop: "7.5px",
              marginRight: "3px",
              marginLeft: "4px",
            }}
          >
            <a
              href="https://www.keepandshare.com/doc7/62364/resume-of-glendon-1-pdf-38k?da=y"
              target="_blank"
            >
              Resume
            </a>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar;
