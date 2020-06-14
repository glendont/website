import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CRS from "./CRS.gif";

import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import amazonPic from "./intern_amazon.jpg";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import GitHubIcon from "@material-ui/icons/GitHub";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 1,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const ProjectDialog = (props) => {
  var link = props.link;
  if (!link) {
    link = "https://github.com/glendont";
  }
  return (
    <div>
      <Dialog
        fullWidth={Boolean(true)}
        maxWidth="sm"
        onClose={props.close}
        aria-labelledby="customized-dialog-title"
        open={props.state}
        id="dialog-box-div"
      >
        <DialogContent dividers id="dialog-content-div">
          <Card style={{ padding: "-20px" }}>
            <Card.Img
              variant="top"
              src={props.image}
              style={{ width: "100%", height: "30vh" }}
            />
            <Card.Body>
              <p
                className="lead intern-text"
                style={{ fontSize: "12px", textAlign: "right" }}
              >
                {" "}
                <AccessAlarmsIcon
                  fontSize="small"
                  style={{
                    fontSize: "15px",
                    marginBottom: "2px",
                    marginLeft: "3px",
                  }}
                />{" "}
                {"  "} 13 June 2020
              </p>{" "}
              <Card.Title style={{ paddingLeft: "5px" }}>
                {" "}
                <h1 className="lead">
                  <b> {props.title}</b>
                  <p
                    className="lead"
                    style={{ fontSize: "15px", marginBottom: "-5px" }}
                  >
                    {props.short_desc} <hr></hr>{" "}
                  </p>
                </h1>
              </Card.Title>
              <Card.Text className="lead" style={{ paddingLeft: "5px" }}>
                <h1 className="lead">
                  <b> Technologies</b>
                </h1>
                <b>
                  {" "}
                  <Badge pill variant="secondary">
                    {props.tags[0]}
                  </Badge>{" "}
                  <Badge pill variant="secondary">
                    {props.tags[1]}
                  </Badge>{" "}
                  <Badge pill variant="secondary">
                    {props.tags[2]}
                  </Badge>{" "}
                  <Badge pill variant="secondary">
                    {props.tags[3]}
                  </Badge>{" "}
                  <Badge pill variant="secondary">
                    {props.tags[4]}
                  </Badge>{" "}
                  <Badge pill variant="secondary">
                    {props.tags[5]}
                  </Badge>{" "}
                  <Badge pill variant="secondary">
                    {props.tags[6]}
                  </Badge>{" "}
                  <Badge pill variant="secondary">
                    {props.tags[7]}
                  </Badge>{" "}
                </b>{" "}
                <hr></hr>
              </Card.Text>
              <Card.Text
                className="lead"
                style={{ fontSize: "15px", letterSpacing: "0.04em" }}
              >
                <div>{props.desc}</div>
                <div style={{ float: "right" }}>
                  <a href={link} style={{ color: "#6C757D" }}>
                    {" "}
                    <GitHubIcon fontSize="small" />{" "}
                  </a>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
    // <div>
    //   <Dialog
    //     fullWidth={Boolean(true)}
    //     maxWidth="lg"
    //     onClose={props.close}
    //     aria-labelledby="customized-dialog-title"
    //     open={props.state}
    //     id="dialog-box-div"
    //   >
    //     <DialogTitle
    //       id="customized-dialog-title"
    //       onClose={props.close}
    //       style={{ textAlign: "center" }}
    //     >
    //       <h4 style={{ marginTop: "5px" }}> Projects</h4>
    //     </DialogTitle>

    //     <DialogContent dividers id="dialog-content-div">
    //       <Row>
    //         <Col className="project-demo" sm={7}>
    //           {" "}
    //           <img src={CRS} style={{ height: "100%", width: "90%" }} />{" "}
    //         </Col>

    //         <Col className="project-demo-right" sm={5}>
    //           <h1
    //             className="lead"
    //             style={{
    //               marginTop: "40px",
    //               marginBottom: "20px",
    //               fontSize: "26px",
    //             }}
    //           >
    //             <strong>{props.title} </strong>
    //           </h1>
    //           <p style={{ marginTop: "6%" }}> {props.desc}</p>
    //           <p style={{ marginTop: "0" }}>
    //             {" "}
    //             On the Data Science arena, PCA and T-SNE was implemented for
    //             dimensionality reduction as well as latent feature engineering.
    //             The latent features are then clustered using the
    //             K-Nearest-Neighbors (KNN) algorithms in order to generate the
    //             more similar data points.
    //           </p>

    //           <p style={{ marginTop: "0" }}>
    //             {" "}
    //             The machine learning model is encapsulated into a back-end API
    //             using the Django web development framework. When used in
    //             conjunction with a front-end user interface, it allows users to
    //             input key characteristics of their company, and get competitor
    //             companies returned to them.
    //           </p>

    //           <p style={{ marginTop: "10%" }}>
    //             Try it yourself at
    //             https://companyrecommendersystem.herokuapp.com/
    //           </p>
    //         </Col>
    //       </Row>
    //     </DialogContent>
    //     <DialogActions>
    //       <Button
    //         autoFocus
    //         onClick={props.close}
    //         onClick={() => window.open(link)}
    //         color="primary"
    //       >
    //         View Project
    //       </Button>
    //     </DialogActions>
    //   </Dialog>
    // </div>
  );
};
