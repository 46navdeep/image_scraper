import React, { Component } from "react";

class Test extends Component {
  render() {
    console.log(localStorage.getItem("param"));
    return <div>{localStorage.getItem("param")}</div>;
  }
}

export default Test;
