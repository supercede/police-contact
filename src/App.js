import React, { Component } from "react";
import StateList from "./stateList/stateList";
import Search from "./search/search";
import { states } from "./assets/data.json";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      query: ""
    };
  }

  handleChange = e => this.setState({ query: e.target.value });

  render() {
    const { query } = this.state;
    const findStates = states.filter(state =>
      state.state.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <div className="container">
        <div className="header">
          <h2>In Trouble? Need Help?</h2>
          <h3>Call the Police Today</h3>
          <Search handleChange={this.handleChange} />
        </div>
        {findStates.length > 0 ? (
          <StateList states={findStates} />
        ) : (
          <p className="no-match">No matches found, please review search query</p>
        )}
        {/* <State /> */}
      </div>
    );
  }
}

export default App;
