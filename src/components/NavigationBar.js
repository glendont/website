import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";

const onClick = () => {
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
        0.2}s`;
    }
  });
};

const NavigationBar = () => (
  <nav className="navbar" style={{ backgroundColor: "#2F4049" }}>
    {/* <div className="nav-links"> */}
    <ul className="nav-links">
      <li>
        <a href="/website"> Home </a>
      </li>
      <li>
        <a href="/projects"> Projects </a>
      </li>
      <li>
        <a href="#"> Resume </a>
      </li>
      <li>
        <a href="/contact"> Contact </a>
      </li>
    </ul>
    {/* <Nav.Item>
        <Nav.Link>
          <Link to="/website">Home</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link>
          <Link to="/projects">Projects</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item style={{ marginTop: "7px" }}>
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
      </Nav.Item> */}
    {/* </div> */}

    <div className="burger" onClick={onClick}>
      <div className="line1"> </div>
      <div className="line2"> </div>
      <div className="line3"> </div>
    </div>

    <Fragment>
      <ul className="navbar-logo">
        <li>
          <a href="/website">
            {" "}
            <LinkedInIcon fontSize="medium" />{" "}
          </a>
        </li>

        <li>
          <a href="/projects">
            {" "}
            <GitHubIcon fontSize="small" />{" "}
          </a>
        </li>

        <li>
          <a href="#">
            {" "}
            <AlternateEmailIcon fontSize="medium" />{" "}
          </a>
        </li>

        <li>
          <a href="/contact">
            {" "}
            <LocalPhoneIcon fontSize="medium" />{" "}
          </a>
        </li>
      </ul>
    </Fragment>
    {/* 
    <div style={{ justifyContent: "right" }}>
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
    </div> */}
  </nav>

  // <Styles>
  //   <Navbar>
  // <Navbar.Brand href="https://www.linkedin.com/in/glendonthaiw/">
  //   <LinkedInIcon fontSize="medium" />
  // </Navbar.Brand>

  // <Navbar.Brand href="https://github.com/glendont">
  //   <GitHubIcon fontSize="small" />
  // </Navbar.Brand>

  // <Navbar.Brand href="mailto:glendon888@gmail.com">
  //   <AlternateEmailIcon fontSize="medium" />
  // </Navbar.Brand>

  // <Navbar.Brand href="/contact">
  //   <LocalPhoneIcon fontSize="medium" />
  // </Navbar.Brand>

  //     <div className="spacer" />

  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="ml-auto">
  //         <Nav.Item>
  //           <Nav.Link>
  //             <Link to="/website">Home</Link>
  //           </Nav.Link>
  //         </Nav.Item>
  //         <Nav.Item>
  //           <Nav.Link>
  //             <Link to="/projects">Projects</Link>
  //           </Nav.Link>
  //         </Nav.Item>
  //         <Nav.Item
  //           style={{
  //             marginTop: "7.5px",
  //             marginRight: "3px",
  //             marginLeft: "4px",
  //           }}
  //         >
  //           <a
  //             href="https://www.keepandshare.com/doc7/62364/resume-of-glendon-1-pdf-38k?da=y"
  //             target="_blank"
  //           >
  //             Resume
  //           </a>
  //         </Nav.Item>
  //         <Nav.Item>
  //           <Nav.Link>
  //             <Link to="/contact">Contact</Link>
  //           </Nav.Link>
  //         </Nav.Item>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Navbar>
  // </Styles>
);

export default NavigationBar;
