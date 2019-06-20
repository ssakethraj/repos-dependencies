import React from "react";
import InputSearch from "../../Components/github/InputSearch";
import GithubResult from "../../Components/github/GithubResult";
import { connect } from "react-redux";
import { fetchRepos } from "../../redux/github/actions";
import Spinner from "../../Components/spinner";

class Github extends React.Component {
  state = {
    input: ""
  };
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  handleSubmit = () => {
    this.props.addTodo(this.state.input);
    this.setState({
      input: ""
    });
  };
  componentDidMount() {
    this.props.fetchRepositories();
  }
  render() {
    const { repos, isLoading } = this.props;
    return (
      <React.Fragment>
        <InputSearch
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.input}
        />
        {isLoading ? (
          <Spinner style={{ display: "inline-block", margin: "100px" }} />
        ) : (
          // "Loading..."
          <GithubResult repos={repos} />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log("State: ", state);
  return {
    repos: state.github.repos,
    isLoading: state.github.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchRepositories: () => dispatch(fetchRepos())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Github);