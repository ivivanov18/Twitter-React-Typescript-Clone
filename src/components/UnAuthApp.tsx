import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "src/pages/Register";
import Login from "src/pages/Login";

export default function UnAuthApp() {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/" component={Login} />
    </Switch>
  );
}
