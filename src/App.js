import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";
import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProjectState from "./components/context/ProjectState";

const App = () => {
  return (
    <ProjectState>
      <Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/website" component={Home} />
            <Route exact path="/projects" component={ProjectPage} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    </ProjectState>
  );
};

export default App;
