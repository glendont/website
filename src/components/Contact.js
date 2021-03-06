import React, { Fragment, useEffect, useState } from "react";
import ContactComponent from "./ContactComponent";
import Container from "react-bootstrap/Container";

const Contact = () => {
  const [printout, setPrintout] = useState("");

  return (
    <Fragment>
      <div style={{ backgroundColor: "#F7F8FA" }}>
        <Container style={{ marginBottom: "-40px" }}>
          <h1
            className="header-title"
            style={{
              textAlign: "center",
              paddingTop: "50px",
              fontFamily: "Poppins",
              fontWeight: "bold",
              textShadow: "0px 1px, 1px 0px, 1px 1px",
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
