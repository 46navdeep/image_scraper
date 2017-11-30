import React from "react";
import ReactDom from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Router, Route, browserHistory } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./components/Search";
import ListBody from "./components/ListBody";
import Test from "./components/Test";

injectTapEventPlugin();

ReactDom.render(
  <MuiThemeProvider>
    <Router path="/" history={browserHistory}>
      <Route path="/search" component={Search} />
      <Router path="/list" component={ListBody} />
      <Router path="/test" component={Test} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
