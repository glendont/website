import React, { Fragment, useState, useContext, useEffect } from "react";
import Projects from "./Projects";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProjectContext from "./context/projectContext";
import projectMachineLearning from "../data/projects_ml.json";
import projectAll from "../data/projects_all.json";
import projectSWE from "../data/projects_swe.json";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import useWindowDimensions from "./useWindowDimensions";

const SearchProjects = () => {
  const { height, width } = useWindowDimensions();
  const [numscol, setnumscol] = useState("1fr 1fr 1fr");
  const [presetheight, setpresetheight] = useState("100%");
  const [presetmargintop, setpresetmargintop] = useState("-5%");

  useEffect(() => {
    function handleResize() {
      window.addEventListener("resize", handleResize);
    }
    handleResize();

    if (width > 1200) {
      setnumscol("1fr 1fr 1fr");
      setpresetheight("100%");
      setpresetmargintop("-3%");
    }

    if (width < 1200 && width > 770) {
      setnumscol("1fr 1fr");
      setpresetheight("100%");
      setpresetmargintop("-2%");
    }

    if (width < 770) {
      setnumscol("1fr");
      setpresetheight("3400px");
      setpresetmargintop("-0%");
    }
  });

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 280,
    },
    selectEmpty: {
      marginTop: theme.spacing(100),
    },
  }));
  const classes = useStyles();

  const projectContext = useContext(ProjectContext);
  const [text, setText] = useState("");
  const [type, setType] = useState("All");

  const handleChange = (event) => {
    if (event.target.value === "1") {
      projectContext.searchProjects(projectAll);
    } else if (event.target.value === "2") {
      projectContext.searchProjects(projectSWE);
    } else {
      projectContext.searchProjects(projectMachineLearning);
    }
  };

  return (
    <Fragment>
      <div style={{ padding: "2%" }}>
        <Row>
          <Col>
            <h1
              className="header-title"
              style={{
                textAlign: "center",
                paddingTop: "30px",
                fontFamily: "Poppins",
                fontWeight: "bold",
                letterSpacing: "0.05em",
                textShadow: "0px 1px, 1px 0px, 1px 1px",
                color: "#102A42",
              }}
            >
              Projects
            </h1>

            <p
              className="lead text sub-header"
              style={{
                fontFamily: "Poppins",
                fontWeight: "700",
                textAlign: "center",
                marginTop: "30px",
                letterSpacing: "0.05em",

                paddingLeft: "10%",
                paddingRight: "10%",
              }}
            >
              {" "}
              From web applications to machine learning models, I am always on
              the hunt for unique and meaningful applications of technology.
            </p>
          </Col>
        </Row>
        <div>
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Categories
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleChange}
                label="Categories"
              >
                <MenuItem value="1">All Projects</MenuItem>
                <MenuItem value="2">Software Engineering Projects</MenuItem>
                <MenuItem value="3">Machine Learning Projects</MenuItem>
              </Select>
            </FormControl>
          </Row>
        </div>
      </div>

      <Container
        style={{
          display: "grid",
          gridTemplateColumns: `${numscol}`,
          gridGap: "2%",
          padding: "3%",
          overflowY: "hidden",
          justifyContent: "center",
          paddingBottom: "15rem",
          height: `${presetheight}`,
          marginTop: `${presetmargintop}`,
          marginBottom: "5rem",
          width: "80%",
        }}
      >
        {projectContext.projects.projects.map((project) => (
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              overflowY: "hidden",
              height: "24rem",
            }}
          >
            <Projects
              title={project.name}
              description={project.desc}
              image={[project.image]}
              short_desc={project.short_desc}
              tags={project.tags}
              link={project.link}
              web={project.web}
            />
            <Card.Body>
              <Card.Title>
                <h1 className="lead" style={{ textAlign: "center" }}>
                  {" "}
                  {project.name}
                </h1>{" "}
              </Card.Title>

              <Card.Text
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                {project.tags.map((tag) => (
                  <span
                    class="badge badge-pill badge-secondary"
                    style={{ marginRight: "3px" }}
                  >
                    {tag}
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </Fragment>
  );
};

export default SearchProjects;
