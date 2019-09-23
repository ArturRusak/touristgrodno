import React from "react";
import { Route } from "react-router-dom";
import { About, Museums, ShowPlaces, StartPage } from "../index";

function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={StartPage}/>
      <Route path="/showplaces" component={ShowPlaces}/>
      <Route path="/about" component={About}/>
      <Route path="/museums" component={Museums}/>
    </React.Fragment>
  );
}

export default Routes;
