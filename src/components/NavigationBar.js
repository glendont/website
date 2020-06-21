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

  // Burg Animation
  const burger = document.querySelector(".burger");
  burger.classList.toggle("toggle");

  if (nav.classList.value.includes("nav-active")) {
    const navLinks = document.querySelectorAll(".nav-links");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        console.log("click");
        onClick();
        // nav.classList.toggle("nav-active");
      });
    });
  }
};

const NavigationBar = () => (
  <nav className="navbar" style={{ backgroundColor: "#2F4049" }}>
    {/* <div className="nav-links"> */}
    <ul className="nav-links">
      <li>
        <Link to="/website">Home</Link>{" "}
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <a
          href="https://www.keepandshare.com/doc7/62364/resume-of-glendon-1-pdf-38k?da=y"
          target="_blank"
        >
          Resume
        </a>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>

    <div className="burger" onClick={onClick}>
      <div className="line1"> </div>
      <div className="line2"> </div>
      <div className="line3"> </div>
    </div>

    <Fragment>
      <ul className="navbar-logo">
        <li>
          <a href="https://www.linkedin.com/in/glendonthaiw/">
            {" "}
            <LinkedInIcon fontSize="medium" />{" "}
          </a>
        </li>

        <li>
          <a href="https://github.com/glendont">
            {" "}
            <GitHubIcon fontSize="small" />{" "}
          </a>
        </li>

        <li>
          <a href="mailto:glendon888@gmail.com">
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
  </nav>
);

export default NavigationBar;
