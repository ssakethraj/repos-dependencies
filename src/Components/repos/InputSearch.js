import React from "react";

export default props => {
  return (
    <div>
      <input onChange={props.handleChange} value={props.value} />
      <button onClick={props.handleSubmit}>Search</button>
    </div>
  );
};
