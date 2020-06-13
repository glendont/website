import React, { useReducer } from "react";
import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";
import { GET_PROJECTS, SEARCH_PROJECTS } from "./types";
import projectsAll from "../../data/projects_all.json";
// Initialise all global states

const ProjectState = (props) => {
  const initialState = {
    projects: projectsAll,
    project: {},
    loading: false,
  };

  // UseReducer Hook to dispatch / trigger Reducer to change states
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // Search Projects
  const searchProjects = (newdata) => {
    dispatch({
      type: SEARCH_PROJECTS,
      payload: newdata,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        project: state.project,
        loading: state.loading,
        searchProjects,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
