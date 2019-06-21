import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Github from "./Containers/Github";
import NotFound from "./Components/404";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Github} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
