import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import SearchBody from "./SearchBody";

class Search extends Component {
  render() {
    return (
      <div>
        <AppBar title="PHOTO SCRAPER" />
        <SearchBody />
      </div>
    );
  }
}

export default Search;
