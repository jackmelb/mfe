import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import AuthApp from "./components/AuthApp";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp}></Route>
          <Route path="/" component={MarketingApp}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
