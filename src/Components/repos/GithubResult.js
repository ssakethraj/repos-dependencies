import React from "react";
import { Link } from "react-router-dom";
export default props => {
  return (
    <div className="list">
      {props.repos.map((repo, index) => (
        <Link to={`/${repo.owner.login}/${repo.name}`} key={index}>
          <div className="link">{repo.name}</div>
        </Link>
      ))}
    </div>
  );
};
