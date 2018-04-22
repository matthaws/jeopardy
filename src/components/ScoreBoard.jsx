import React from "react";
import PropTypes from "prop-types";

class ScoreBoard extends React.Component {
  render() {
    const { user, score } = this.props;
    return (
      <header>
        <h3>
          {user}: ${score}
        </h3>
      </header>
    );
  }
}

ScoreBoard.defaultProps = {
  user: "Generic Contestant",
  score: 0
};

ScoreBoard.propTypes = {
  user: PropTypes.string,
  score: PropTypes.number
};

export default ScoreBoard;
