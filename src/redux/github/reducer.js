import { actions } from "./actions";
const initialState = {
  loading: false,
  repos: [],
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_REPOS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actions.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.payload
      };
    case actions.FETCH_REPOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actions.FETCH_CONTENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actions.FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        content: action.payload
      };
    case actions.FETCH_CONTENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
