import React from "react";
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
import amazonPic from "./intern_amazon.jpg";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import Badge from "react-bootstrap/Badge";

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

export const InternDialog = (props) => {
  const { contributions } = props;

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
        // style={{ backgroundColor: "red" }}
      >
        {/* <DialogTitle
          id="customized-dialog-title"
          onClose={props.close}
          style={{ textAlign: "center" }}
        >
          <h4
            style={{
              marginTop: "5px",
              fontFamily: "Poppins",
              fontWeight: "700",
            }}
          >
            {" "}
            Internships
          </h4>
        </DialogTitle> */}

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
                {"  "} {props.date}
              </p>{" "}
              <Card.Title>
                {" "}
                <h1 className="lead">
                  <b> {props.company}</b>
                  <p
                    className="lead"
                    style={{ fontSize: "15px", marginBottom: "-5px" }}
                  >
                    {props.department}{" "}
                  </p>
                </h1>
              </Card.Title>
              <Card.Text className="lead">
                <b>
                  {" "}
                  <Badge pill variant="secondary">
                    {props.role}
                  </Badge>{" "}
                </b>{" "}
                <hr></hr>
              </Card.Text>
              <Card.Text className="lead" style={{ fontSize: "15px" }}>
                <ul>
                  <li> {props.contributions_1}</li>
                  <li> {props.contributions_2}</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* <div style={{ height: "20%", padding: "5%" }}>
            <Image
              style={{
                width: "250px",
                height: "80px",
                textalign: "center",
                verticalAlign: "center",
              }}
              src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp"
            />{" "}
            <h1>Software Engineering</h1>
            <ul>
              <li> Sentiment analysis software development</li>

              <li>
                Developed signal processing techniques of speech data for
                emotion detection through NLP{" "}
              </li>

              <li>
                Software development through rapid prototyping of a virtual
                assistant capable of automating vocal analysis for batch
                processing and live processing inputs{" "}
              </li>
            </ul>
          </div> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};
