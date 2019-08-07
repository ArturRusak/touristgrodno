import React from "react";
import { Route, Switch } from "react-router-dom";
import { About, Museums, ShowPlaces, StartPage } from "../index";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={StartPage}/>
      <Route path="/showplaces" component={ShowPlaces}/>
      <Route path="/about" component={About}/>
      <Route path="/museums" component={Museums}/>
    </Switch>
  );
}

export default Routes;
