import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip as tooltip, OverlayTrigger, Button } from "react-bootstrap";
import { ProjectDialog } from "./ProjectDialog";
import { useHoverLeave } from "./customHooks/useHoverLeave";
import { useWindowDimensions } from "./customHooks/useWindowDimensions";

const useStyles = makeStyles((theme) => ({
  buttonWord: {
    color: "#45474a",
  },
  buttonOutline: {
    borderColor: "#08FDD8",
    borderRadius: 5,
    borderWidth: "thick",
    paddingTop: 0,
  },
}));

const Projects = (props) => {
  const { title, description, image, short_desc } = props;

  const classes = useStyles();
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

  const mainClassName = props.css + "animated fadeInUp card text-center";

  return (
    <div className={mainClassName} ref={ref}>
      <ProjectDialog
        title={props.title}
        link={props.link}
        desc={description}
        short_desc={short_desc}
        para2={props.para2}
        para3={props.para3}
        state={open}
        close={handleClose}
        image={props.image}
        tags={props.tags}
        web={props.web}
      />
      {hovered ? (
        <div className="projectWordedDiv" style={{ height: "230px" }}>
          <div className="innerNameFlex animated fadeInDown">
            <div className="alignTextDiv">
              <p
                className="lead ProjectNameWords"
                style={{ marginTop: "1rem" }}
              >
                <b style={{ font: "Roboto" }}> {title}</b>
              </p>
              <p className="ProjectDescWords">{short_desc}</p>
            </div>
          </div>

          <div className="innerButtonFlex animated fadeInUp">
            <Button
              onClick={handleOpen}
              variant="outline-secondary"
              style={{ height: "2.5rem", marginBottom: "6rem" }}
            >
              <p>Learn More</p>
            </Button>
          </div>
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
            src={image}
            alt={title}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
