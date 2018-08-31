import React from "react";
import { Route, Switch } from "react-router-dom";

import routesMap from "config/routes-map";

export default (
  <Switch>
    {routesMap.map((routeConfig, index) => (
      <Route key={index} {...routeConfig} />
    ))}
  </Switch>
);
