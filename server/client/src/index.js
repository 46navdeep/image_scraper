import React from "react";
import ReactDom from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Router, Route, browserHistory } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./components/Search";
import ListBody from "./components/ListBody";
import Saved from "./components/Saved";

injectTapEventPlugin();

ReactDom.render(
  <MuiThemeProvider>
    <Router path="/" history={browserHistory}>
      <Route path="/search" component={Search} />
      <Router path="/list" component={ListBody} />
      <Router path="/saved" component={Saved} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
