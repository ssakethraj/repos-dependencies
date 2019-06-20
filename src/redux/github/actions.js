export const actions = {
  FETCH_REPOS_REQUEST: "FETCH_REPOS_REQUEST",
  FETCH_REPOS_SUCCESS: "FETCH_REPOS_SUCCESS",
  FETCH_REPOS_ERROR: "FETCH_REPOS_ERROR",
  FETCH_CONTENT_REQUEST: "FETCH_CONTENT_REQUEST",
  FETCH_CONTENT_SUCCESS: "FETCH_CONTENT_SUCCESS",
  FETCH_CONTENT_ERROR: "FETCH_CONTENT_ERROR"
};

// action creators for fetch repos
const fetchRepoStarted = () => {
  return {
    type: actions.FETCH_REPOS_REQUEST
  };
};
const fetchRepoSuccess = payload => {
  return {
    type: actions.FETCH_REPOS_SUCCESS,
    payload
  };
};
const fetchRepoFailure = err => {
  return {
    type: actions.FETCH_REPOS_ERROR,
    error: err
  };
};

//action creators for fetch content
const fetchContentStarted = () => {
  return {
    type: actions.FETCH_CONTENT_REQUEST
  };
};
const fetchContentSuccess = payload => {
  return {
    type: actions.FETCH_CONTENT_SUCCESS,
    payload
  };
};
const fetchContentFailure = err => {
  return {
    type: actions.FETCH_CONTENT_ERROR,
    error: err
  };
};

// FETCH REPOSITORY
export const fetchRepos = () => dispatch => {
  dispatch(fetchRepoStarted());
  fetch("https://api.github.com/repositories")
    .then(res => res.json())
    .then(data => {
      console.log("Repos: ", data);
      dispatch(fetchRepoSuccess(data));
    })
    .catch(err => {
      console.log("Error", err)
      dispatch(fetchRepoFailure(err));
    });
};

//FETCH CONTENT
export const fetchRepoContent = (username, reponame) => dispatch => {
  console.log("triggered")
  dispatch(fetchContentStarted());
  fetch(`https://api.github.com/repos/${username}/${reponame}/contents/package.json`)
    .then(res => res.json())
    .then(data => {
      console.log("Content: ", data);
      dispatch(fetchContentSuccess(data));
    })
    .catch(err => {
      dispatch(fetchContentFailure(err));
    });
}