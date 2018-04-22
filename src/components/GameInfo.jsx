import React, { Component } from "react";
import ScoreBoard from "./ScoreBoard.jsx";
import Login from "./Login/Login";
import Game from "./Game/Game";
import Theme from "../assets/sound/theme.mp3";

class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateUser = e => {
    const user = e.currentTarget.value;
    this.setState({ user });
  };

  startGame = e => {
    e.preventDefault();
    this.setState({ gameStart: true, user: this.state.user });
  };

  updateScore = value => {
    const oldScore = this.state.score || 0;
    const newScore = oldScore + value;
    this.setState({ score: newScore });
  };

  render() {
    const { user, gameStart } = this.state;
    return (
      <main>
        <ScoreBoard user={this.state.user} score={this.state.score} />
        {!gameStart ? (
          <Login
            user={user}
            updateUser={this.updateUser}
            startGame={this.startGame}
          />
        ) : (
          <Game />
        )}
        <audio ref="audio_tag" src={Theme} autoPlay />
      </main>
    );
  }
}

export default GameInfo;
