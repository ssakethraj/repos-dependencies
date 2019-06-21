export const actions = {
  FETCH_REPOS: "FETCH_REPOS",
  FETCH_CONTENT: "FETCH_CONTENT",
  FETCH_REPO: "FETCH_REPO",
};

// action creators
const fetchStarted = (type) => {
  return {
    type: type + "_REQUEST"
  };
};
const fetchSuccess = (type, payload) => {
  return {
    type: type + "_SUCCESS",
    payload
  };
};
const fetchRFailure = (type, err) => {
  return {
    type: type + "_ERROR",
    error: err
  };
};

// FETCH REPOSITORY
export const fetchRepos = () => dispatch => {
  dispatch(fetchStarted(actions.FETCH_REPOS));
  fetch("https://api.github.com/repositories")
    .then(res => res.json())
    .then(data => {
      console.log("Repos: ", data);
      dispatch(fetchSuccess(actions.FETCH_REPOS, data));
    })
    .catch(err => {
      console.log("Error", err)
      dispatch(fetchSuccess(actions.FETCH_REPOS, err));
    });
};

//FETCH CONTENT
export const fetchRepoContent = (username, reponame) => dispatch => {
  console.log("triggered")
  dispatch(fetchStarted(actions.FETCH_CONTENT));
  fetch(`https://api.github.com/repos/${username}/${reponame}/contents/package.json`)
    .then(res => res.json())
    .then(data => {
      console.log("Content: ", data);
      dispatch(fetchSuccess(actions.FETCH_CONTENT, data));
    })
    .catch(err => {
      dispatch(fetchSuccess(actions.FETCH_CONTENT, err));
    });
}

// FETCH CURRENT REPOSITORY
export const fetchCurrentRepo = (owner, repo) => dispatch => {
  dispatch(fetchStarted(actions.FETCH_REPO));
  fetch(`https://api.github.com/repos/${owner}/${repo}`)
    .then(res => res.json())
    .then(data => {
      console.log("Repos: ", data);
      dispatch(fetchSuccess(actions.FETCH_REPO, data));
    })
    .catch(err => {
      console.log("Error", err)
      dispatch(fetchSuccess(actions.FETCH_REPO, err));
    });
};