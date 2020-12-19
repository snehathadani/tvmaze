import React, { Component } from "react";
import axios from "axios";

import { Cards } from "./cards/Cards";

class InitialPage extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      data: [],
    };
  }
  handleSearchInput = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };
  handleSearchBtn = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${this.state.searchField}`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
        // console.log(this.state.data[0].show);
      });
  };

  showlist = () => {
    return (
      <>
        {this.state.data.map((s) => (
          <Cards shows={s.show} />
        ))}
      </>
    );
  };
  render() {
    console.log(this.state.searchField);

    return (
      <>
        <div className="page-header">
          <h1>Show Finder</h1>
        </div>
        <div className="page-contant">
          <form>
            <input
              type="text"
              onChange={this.handleSearchInput}
              placeholder="Search"
            />
            <button onClick={this.handleSearchBtn}>Search</button>
          </form>

          {this.state.data.length > 0 ? this.showlist() : null}
        </div>
      </>
    );
  }
}

export default InitialPage;
