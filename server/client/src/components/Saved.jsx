import React, { Component } from "react";
import $ from "jquery";

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  handleData = data => {
    this.setState({ links: data[0].links });
  };

  handleClick = () => {
    var parameters = {
      key: localStorage.getItem("param")
    };
    $.ajax({
      url: "/sendsaved",
      data: parameters,
      type: "POST",
      success: this.handleData
    });
  };

  render() {
    return (
      <div>
        {this.handleClick()}
        <div>
          {this.state.links.map((link, index) => {
            return (
              <div key={index} style={{ display: "inline" }}>
                <img src={link} alt={index} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Saved;
