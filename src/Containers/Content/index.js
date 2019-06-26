import React from "react";
import { connect } from "react-redux";
import { fetchContent, fetchRepo } from "../../redux/github/actions";
import Spinner from "../../Components/spinner";

class Content extends React.Component {
  componentWillMount() {
    const username = this.props.match.params.username;
    const reponame = this.props.match.params.reponame;
    this.props.fetchContent(username, reponame);
    this.props.fetchRepo(username, reponame);
  }
  render() {
    const { repo, content } = this.props;
    if (repo === null) {
      return (
        <Spinner
          style={{
            display: "inline-block",
            margin: "100px"
          }}
        />
      );
    }
    return (
      <div>
        <h3>Repo name: {repo.name}</h3>
        <h3>User name: {repo.owner.login}</h3>
        <h3>Dependencies</h3>

        {content !== null && content.message !== "Not Found"
          ? Object.keys(
              JSON.parse(window.atob(content.content)).dependencies
            ).map((item, index) => <h4 key={index}>{item}</h4>)
          : "No Package.json file exists"}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("State: ", state);
  return {
    content: state.github.content,
    repo: state.github.currentRepo
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   const username = ownProps.match.params.username;
//   const reponame = ownProps.match.params.reponame;
//   return {
//     fetchRepoContent: () => dispatch(fetchRepoContent(username, reponame)),
//     fetchCurrentRepo: () => dispatch(fetchCurrentRepo(username, reponame))
//   };
// };

export default connect(
  mapStateToProps,
  { fetchRepo, fetchContent }
)(Content);
