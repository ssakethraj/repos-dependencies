export const actions = {
  FETCH_REPOS: "FETCH_REPOS",
  FETCH_CONTENT: "FETCH_CONTENT",
  FETCH_REPO: "FETCH_REPO"
};

// action creators
export const fetchStarted = type => {
  return {
    type: type + "_REQUEST"
  };
};
export const fetchSuccess = (type, payload) => {
  return {
    type: type + "_SUCCESS",
    payload
  };
};
export const fetchFailure = (type, err) => {
  return {
    type: type + "_ERROR",
    error: err
  };
};
export const fetchRepos = () => {
  return {
    type: actions.FETCH_REPOS
  };
};
export const fetchRepo = (owner, repo) => {
  return {
    type: actions.FETCH_REPO,
    owner,
    repo
  };
};

export const fetchContent = (owner, repo) => {
  return {
    type: actions.FETCH_CONTENT,
    owner,
    repo
  };
};

// FETCH REPOSITORY
// export const fetchRepos = () => dispatch => {
//   dispatch(fetchStarted(actions.FETCH_REPOS));
//   fetch("https://api.github.com/repositories")
//     .then(res => res.json())
//     .then(data => {
//       console.log("Repos: ", data);
//       dispatch(fetchSuccess(actions.FETCH_REPOS, data));
//     })
//     .catch(err => {
//       console.log("Error", err)
//       dispatch(fetchFailure(actions.FETCH_REPOS, err));
//     });
// };

//FETCH CONTENT
// export const fetchRepoContent = (username, reponame) => dispatch => {
//   console.log("triggered")
//   dispatch(fetchStarted(actions.FETCH_CONTENT));
//   fetch(`https://api.github.com/repos/${username}/${reponame}/contents/package.json`)
//     .then(res => res.json())
//     .then(data => {
//       console.log("Content: ", data);
//       dispatch(fetchSuccess(actions.FETCH_CONTENT, data));
//     })
//     .catch(err => {
//       dispatch(fetchFailure(actions.FETCH_CONTENT, err));
//     });
// }

// FETCH CURRENT REPOSITORY
// export const fetchCurrentRepo = (owner, repo) => dispatch => {
//   dispatch(fetchStarted(actions.FETCH_REPO));
//   fetch(`https://api.github.com/repos/${owner}/${repo}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log("Repos: ", data);
//       dispatch(fetchSuccess(actions.FETCH_REPO, data));
//     })
//     .catch(err => {
//       console.log("Error", err)
//       dispatch(fetchFailure(actions.FETCH_REPO, err));
//     });
// };
