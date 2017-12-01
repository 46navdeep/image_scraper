import React, { Component } from "react";
import TextField from "material-ui/TextField";
import { orange500 } from "material-ui/styles/colors";
import RaisedButton from "material-ui/RaisedButton";
import Divider from "material-ui/Divider";
import RefreshIndicator from "material-ui/RefreshIndicator";
import $ from "jquery";

class SearchBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: " ",
      imge: [],
      ref: "hide"
    };
  }

  handleData = data => {
    /*  fetch("/home", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(resp => resp.json())
      .then(dat => console.log(dat));
    //.then(console.log("Chala"));*/
    this.setState({ ref: "hide" });
    this.setState({ imge: data });
  };

  handleClick = key => {
    this.setState({ ref: "loading" });

    $.ajax({
      url: "/home",
      data: { key: key },
      type: "POST",
      success: this.handleData
    });
  };

  render() {
    return (
      <div>
        <TextField
          style={{ marginLeft: "40%", marginTop: "4%" }}
          hintText="Enter the keyword to be searched"
          hintStyle={{ color: orange500 }}
          onChange={event => this.setState({ keyword: event.target.value })}
        />
        <RefreshIndicator
          size={50}
          left={830}
          top={0}
          loadingColor="#FF9800"
          status={this.state.ref}
          style={{ position: "relative" }}
        />
        <RaisedButton
          label="Search"
          secondary={true}
          style={{ marginLeft: "44%" }}
          onClick={() => this.handleClick(this.state.keyword)}
        />
        <br />
        <br />
        <Divider />
        <div>
          {this.state.imge.map((link, index) => {
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

export default SearchBody;
