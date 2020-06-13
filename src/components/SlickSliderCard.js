import React from "react";
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
    <div>
      <Row className="d-flex justify-content-center center-block d-block m-auto">
        <Col
          className="d-flex justify-content-center center-block d-block m-auto"
          lg={12}
          style={{ paddingBottom: "10px" }}
        >
          <Card style={{ width: "30vw", height: "auto", padding: "10px" }}>
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Subtitle className="mb-2 text-muted">
                <FormatQuoteIcon
                  fontSize="large"
                  style={{ color: "#41A4F5", transform: "rotate(180deg)" }}
                />
              </Card.Subtitle>
              <Card.Text>{props.comments}</Card.Text>
              <div className="image-words">
                <Image
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "-5px",
                    marginLeft: "2px",
                    marginRight: "10px",
                    float: "left",
                  }}
                  src={props.image}
                  roundedCircle
                />
                {props.name}
                <p style={{ color: "gray" }}> {props.title} </p>
              </div>

              <Card.Link
                className="float-right"
                href="#"
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
    </div>
  );
};

export default SlickSliderCard;
