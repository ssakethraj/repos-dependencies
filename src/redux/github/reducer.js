import { actions } from "./actions";
const initialState = {
  loading: false,
  repos: [],
  currentRepo: null,
  content: null,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_REPOS + "_REQUEST":
      return {
        ...state,
        loading: true
      };
    case actions.FETCH_REPOS + "_SUCCESS":
      return {
        ...state,
        loading: false,
        repos: action.payload
      };
    case actions.FETCH_REPOS + "_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actions.FETCH_CONTENT + "_REQUEST":
      return {
        ...state,
        loading: true
      };
    case actions.FETCH_CONTENT + "_SUCCESS":
      return {
        ...state,
        loading: false,
        content: action.payload
      };
    case actions.FETCH_CONTENT + "_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actions.FETCH_REPO + "_REQUEST":
      return {
        ...state,
        loading: true
      };
    case actions.FETCH_REPO + "_SUCCESS":
      return {
        ...state,
        loading: false,
        currentRepo: action.payload
      };
    case actions.FETCH_REPO + "_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
