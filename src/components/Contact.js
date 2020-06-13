import React, { Fragment } from "react";
import ContactComponent from "./ContactComponent";
import Container from "react-bootstrap/Container";

const Contact = () => {
  return (
    <Fragment>
      <div style={{ backgroundColor: "#F7F8FA" }}>
        <Container style={{ marginBottom: "-40px" }}>
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
            Contact
          </h1>
        </Container>
        <ContactComponent />
      </div>
    </Fragment>
  );
};

export default Contact;
