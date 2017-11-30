import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import Divider from "material-ui/Divider";
import $ from "jquery";
import { Link } from "react-router";

class ListBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }

  handleData = data => {
    this.setState({ words: data });
    console.log(this.state.words);
  };

  handleStorage = key => {
    localStorage.setItem("param", key);
  };

  handleClick = () => {
    console.log("About to send ajax request");
    $.ajax({
      url: "/newlist",
      data: { key: "Heyo" },
      type: "POST",
      success: this.handleData
    });
  };

  render() {
    console.log(localStorage.getItem("last"));
    return (
      <div>
        <RaisedButton
          label="Refresh List"
          primary={true}
          style={{ marginLeft: "44%" }}
          onClick={() => this.handleClick()}
        />
        <br />
        <br />
        <Divider />
        <div>
          {this.state.words.map((obj, index) => {
            return (
              <div key={index}>
                <Link
                  to={"/test"}
                  onClick={() => this.handleStorage(obj.keyword)}
                >
                  {obj.keyword}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListBody;
