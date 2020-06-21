import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SlickSliderCard from "./SlickSliderCard";
import * as testimonialData from "../data/testimonial.json";
import useWindowDimensions from "./useWindowDimensions";

const SlickSlider = () => {
  const { height, width } = useWindowDimensions();
  const [numspad, setNumspad] = useState(3);

  useEffect(() => {
    function handleResize() {
      window.addEventListener("resize", handleResize);
    }

    handleResize();

    if (width > 1200) {
      setNumspad(3);
    } else {
      setNumspad(1);
    }
  });

  var settings = {
    dots: true,
    infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: numspad,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <div style={{ backgroundColor: "#f7f8fa" }}>
        <Container>
          <Row>
            <Col xs={1}> </Col>
            <Col xs={10}>
              <h1
                className="header-title"
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
                Testimonials
              </h1>
              <p
                className="lead text sub-header"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  textAlign: "center",
                  marginTop: "-30px",
                  marginBottom: "-5px",
                  letterSpacing: "0.05em",
                }}
              >
                {" "}
                Hear what my past mentors and clients think about me
              </p>
            </Col>
            <Col xs={1}> </Col>
          </Row>
        </Container>
      </div>
      <Slider {...settings} className="slider-div">
        {testimonialData.features.map((testimonial) => (
          <Col xs={12} sm={12} md={12}>
            <SlickSliderCard
              comments={testimonial.comments}
              image={testimonial.image}
              name={testimonial.name}
              title={testimonial.title}
              linkedinurl={testimonial.linkedin}
            />
          </Col>
        ))}
      </Slider>
    </Fragment>
  );
};
export default SlickSlider;
