import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/series/series";
import SingleSerie from "../../containers/singleSerie";

const Main = props => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route path="/series/:id" component={SingleSerie} />
  </Switch>
);

export default Main;
