import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { InternDialog } from "./InternDialog";
import { useHoverLeave } from "./customHooks/useHoverLeave";
import { useWindowDimensions } from "./customHooks/useWindowDimensions";

const Internships = (props) => {
  const [ref, hovered] = useHoverLeave();
  const [open, setOpen] = useState(false);
  const { height, width } = useWindowDimensions();

  var buttonOutline = true;
  if (width < 1025) {
    buttonOutline = false;
  }
  var [button, setButton] = useState(buttonOutline);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const mainClassName = props.css + "animated fadeInUp";

  return (
    <div className={mainClassName} ref={ref}>
      <InternDialog
        title={props.title}
        company={props.company}
        department={props.department}
        role={props.role}
        date={props.date}
        image={props.image}
        link={props.link}
        para1={props.para1}
        para2={props.para2}
        para3={props.para3}
        state={open}
        close={handleClose}
        contributions_1={props.contributions_1}
        contributions_2={props.contributions_2}
        contributions_3={props.contributions_3}
        contributions_4={props.contributions_4}
        contributions_5={props.contributions_5}
      />
      {hovered ? (
        <div>
          <Card.Img
            className="projectWordedDiv"
            src={props.image}
            style={{ height: "230px", opacity: "0.4" }}
          />
          <Card.ImgOverlay>
            <Card.Text>
              <div className="innerButtonFlex animated fadeIn">
                <Button
                  onClick={handleOpen}
                  variant="secondary"
                  style={{
                    height: "2.5rem",
                    marginTop: "150px",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ fontFamily: "poppins", fontStyle: "bold" }}>
                    {" "}
                    Learn More
                  </p>
                </Button>
              </div>
            </Card.Text>
          </Card.ImgOverlay>
        </div>
      ) : (
        <div
          className="projectImageDiv animated fadeIn"
          style={{ zIndex: "100" }}
        >
          <img
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              height: "230px",
            }}
            src={props.image}
            alt={props.title}
          />
        </div>
      )}
    </div>
  );
};

export default Internships;
