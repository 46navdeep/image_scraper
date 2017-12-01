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
  };

  handleStorage = key => {
    localStorage.setItem("param", key);
  };

  handleClick = () => {
    $.ajax({
      url: "/newlist",
      data: { key: "Heyo" },
      type: "POST",
      success: this.handleData
    });
  };

  render() {
    return (
      <div>
        {this.handleClick()}
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
                    to={"/saved"}
                    onClick={() => this.handleStorage(obj.keyword)}
                  >
                    {obj.keyword}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ListBody;
