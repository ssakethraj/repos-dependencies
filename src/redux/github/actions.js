export const actions = {
  FETCH_REPOS_REQUEST: "FETCH_REPOS_REQUEST",
  FETCH_REPOS_SUCCESS: "FETCH_REPOS_SUCCESS",
  FETCH_REPOS_ERROR: "FETCH_REPOS_ERROR"
};

const fetchStarted = () => {
  return {
    type: actions.FETCH_REPOS_REQUEST
  };
};
const fetchSuccess = payload => {
  return {
    type: actions.FETCH_REPOS_SUCCESS,
    payload
  };
};
const fetchFailure = err => {
  return {
    type: actions.FETCH_REPOS_REQUEST,
    error: err
  };
};

export const fetchRepos = () => dispatch => {
  dispatch(fetchStarted());
  fetch("https://api.github.com/repositories")
    .then(res => res.json())
    .then(data => {
      console.log("Repos: ", data);
      dispatch(fetchSuccess(data));
    })
    .catch(err => {
      dispatch(fetchFailure(err));
    });
};
