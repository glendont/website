import { SEARCH_PROJECTS, GET_PROJECTS } from "./types";

// A reducer is just a function that takes in a state and an action that changes the state
export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      };

    case SEARCH_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    default:
      return state;
  }
};
