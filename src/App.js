import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {

  return (
    <Switch>
      {routes.map(({ component, path, exact }) =>
        <Route
          key={path}
          component={component}
          path={path}
          exact={exact}
        />
      )}
    </Switch>
  )
}

export default App;
