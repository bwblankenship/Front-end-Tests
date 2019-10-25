import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import AssetPage from "./components/assets/AssetPage";
import Header from "./components/shared/Header";

const App: React.FC = () => {
  return (
    <div className="main">
      <Header />
      <div className="content px-4">
        <Switch>
          <Route exact path="/" component={AssetPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
