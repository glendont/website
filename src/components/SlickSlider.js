import React, { Fragment } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Projects from "./Projects";
import dstaImage from "./intern_dsta.jpg";
import SkillsOverview from "./SkillsOverview";
import SlickSliderCard from "./SlickSliderCard";
import * as testimonialData from "../data/testimonial.json";

const SlickSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    arrow: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <div style={{ backgroundColor: "#f7f8fa" }}>
        <Container>
          <Row>
            <Col>
              <h1
                style={{
                  textAlign: "center",
                  paddingTop: "50px",
                  paddingBottom: "40px",
                  fontFamily: "Poppins",
                  textShadow: "0px 1px, 1px 0px, 1px 1px",
                  fontWeight: "bold",
                  letterSpacing: "0.05em",
                  color: "#102A42",
                }}
              >
                Featured Testimonals
              </h1>
              <p
                className="lead text"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  letterSpacing: "0.001em",
                  textAlign: "justify",
                  marginTop: "-30px",
                  marginBottom: "-5",
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
        </Container>
      </div>
      <Slider {...settings} className="slider-div">
        {testimonialData.features.map((testimonial) => (
          <div>
            <SlickSliderCard
              comments={testimonial.comments}
              image={testimonial.image}
              name={testimonial.name}
              title={testimonial.title}
              linkedinurl={testimonial.linkedin}
            />
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};
export default SlickSlider;
