import React from "react";

export default props => {
  return (
    <div>
      <ul>
        {props.repos.map((repo, index) => (
          <li key={index}> {repo.name} </li>
        ))}
      </ul>
    </div>
  );
};
