import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import { routes } from "src/configs/routes";
import { ROUTES } from "src/configs/constants";

const App: React.VFC = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <ul>
            <li>
              <Link to={ROUTES.pet}></Link>
            </li>
          </ul>
          <Switch>
            <Redirect exact from="/" to={ROUTES.pet} />
            {routes.map((route, i) => (
              <Route key={i} path={route.path} component={route.component} />
            ))}
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
