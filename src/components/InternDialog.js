import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Card from "react-bootstrap/Card";
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
                {"  "} {props.date}
              </p>{" "}
              <Card.Title style={{ paddingLeft: "5px" }}>
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
              <Card.Text className="lead" style={{ paddingLeft: "5px" }}>
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
                  {props.contributions_1 ? (
                    <li> {props.contributions_1}</li>
                  ) : (
                    <Fragment> </Fragment>
                  )}
                  {props.contributions_2 ? (
                    <li> {props.contributions_2}</li>
                  ) : (
                    <Fragment> </Fragment>
                  )}
                  {props.contributions_3 ? (
                    <li> {props.contributions_3}</li>
                  ) : (
                    <Fragment> </Fragment>
                  )}
                  {props.contributions_4 ? (
                    <li> {props.contributions_4}</li>
                  ) : (
                    <Fragment> </Fragment>
                  )}
                  {props.contributions_5 ? (
                    <li> {props.contributions_5}</li>
                  ) : (
                    <Fragment> </Fragment>
                  )}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};
