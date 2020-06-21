import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Image from "react-bootstrap/Image";
import LaunchIcon from "@material-ui/icons/Launch";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const SlickSliderCard = (props) => {
  return (
    <Fragment>
      <Row className="d-flex justify-content-center center-block d-block m-auto">
        <Col
          className="d-flex justify-content-center center-block d-block m-auto"
          xs={12}
          sm={12}
          md={12}
          style={{ paddingBottom: "10px" }}
        >
          <Card style={{ width: "100%", height: "100%", padding: "10px" }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                <FormatQuoteIcon
                  fontSize="large"
                  style={{ color: "#567787", transform: "rotate(180deg)" }}
                />
              </Card.Subtitle>
              <Card.Text>{props.comments}</Card.Text>
              <div className="image-words" style={{ fontSize: "16px" }}>
                <Image
                  style={{
                    width: "58px",
                    height: "58px",
                    marginTop: "-5px",
                    marginLeft: "2px",
                    marginRight: "10px",
                    float: "left",
                  }}
                  src={props.image}
                  roundedCircle
                />
                {props.name}
                <p style={{ color: "gray", fontSize: "14px" }}>
                  {" "}
                  {props.title}{" "}
                </p>
              </div>

              <Card.Link
                href={props.linkedinurl}
                target="_blank"
                className="float-right"
                style={{
                  fontSize: "13px",
                  color: "grey",
                  marginTop: "10px",
                  marginBottom: "-20px",
                  marginRight: "-5px",
                }}
              >
                <LinkedInIcon
                  style={{
                    fontSize: "27px",
                    marginRight: "3px",
                    marginBottom: "4px",
                    color: "#0077B5",
                  }}
                />
                View on Linkedin
                <LaunchIcon
                  fontSize="small"
                  style={{
                    fontSize: "15px",
                    marginLeft: "5px",
                    marginBottom: "3px",
                    color: "grey",
                  }}
                />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SlickSliderCard;
