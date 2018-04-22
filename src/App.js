import React, { Component } from "react";
import logo from "./logo.svg";
import GameInfo from "./components/GameInfo.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to JEOPARDY!</h1>
        <GameInfo />
      </div>
    );
  }
}

export default App;
