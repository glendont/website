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
import WebIcon from "@material-ui/icons/Web";

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
  const { tags } = props;
  var link = props.link;
  var web = props.web;
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
                  {tags.map((tag) => {
                    return (
                      <Badge
                        pill
                        variant="secondary"
                        style={{ marginRight: "3px" }}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </b>{" "}
                <hr></hr>
              </Card.Text>
              <Card.Text
                className="lead"
                style={{ fontSize: "15px", letterSpacing: "0.04em" }}
              >
                <div style={{ marginBottom: "30px" }}>{props.desc}</div>

                {props.web !== "none" ? (
                  <div style={{ float: "right" }}>
                    <a href={link} style={{ color: "#6C757D" }}>
                      {" "}
                      <GitHubIcon style={{ fontSize: "25px" }} />{" "}
                    </a>

                    <a href={web} style={{ color: "#6C757D" }}>
                      {" "}
                      <WebIcon
                        style={{ fontSize: "33px", marginBottom: "-2px" }}
                      />{" "}
                    </a>
                  </div>
                ) : (
                  <div style={{ float: "right" }}>
                    <a href={link} style={{ color: "#6C757D" }}>
                      {" "}
                      <GitHubIcon style={{ fontSize: "25px" }} />{" "}
                    </a>
                  </div>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};
