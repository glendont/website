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
        maxWidth="lg"
        onClose={props.close}
        aria-labelledby="customized-dialog-title"
        open={props.state}
        id="dialog-box-div"
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={props.close}
          style={{ textAlign: "center" }}
        >
          <h4 style={{ marginTop: "5px" }}> Projects</h4>
        </DialogTitle>

        <DialogContent dividers id="dialog-content-div">
          <Row>
            <Col className="project-demo" sm={7}>
              {" "}
              <img src={CRS} style={{ height: "100%", width: "90%" }} />{" "}
            </Col>

            <Col className="project-demo-right" sm={5}>
              <h1
                className="lead"
                style={{
                  marginTop: "40px",
                  marginBottom: "20px",
                  fontSize: "26px",
                }}
              >
                <strong>{props.title} </strong>
              </h1>
              <p style={{ marginTop: "6%" }}> {props.desc}</p>
              <p style={{ marginTop: "0" }}>
                {" "}
                On the Data Science arena, PCA and T-SNE was implemented for
                dimensionality reduction as well as latent feature engineering.
                The latent features are then clustered using the
                K-Nearest-Neighbors (KNN) algorithms in order to generate the
                more similar data points.
              </p>

              <p style={{ marginTop: "0" }}>
                {" "}
                The machine learning model is encapsulated into a back-end API
                using the Django web development framework. When used in
                conjunction with a front-end user interface, it allows users to
                input key characteristics of their company, and get competitor
                companies returned to them.
              </p>

              <p style={{ marginTop: "10%" }}>
                Try it yourself at
                https://companyrecommendersystem.herokuapp.com/
              </p>
            </Col>
          </Row>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={props.close}
            onClick={() => window.open(link)}
            color="primary"
          >
            View Project
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
