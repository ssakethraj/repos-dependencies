import React from "react";
import { Link } from "react-router-dom";
export default props => {
  return (
    <div>
      <ul>
        {props.repos.map((repo, index) => (
          <Link to={`/${repo.owner.login}/${repo.name}`}>
            <li key={index}> {repo.name} </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
