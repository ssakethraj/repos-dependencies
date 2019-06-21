import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Github from "./Containers/Repos";
import NotFound from "./Components/404";
import Content from "./Containers/Content";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Github} />
      <Route path="/:username/:reponame" component={Content} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
