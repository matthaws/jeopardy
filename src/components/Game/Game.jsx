import React from "react";
import PropTypes from "prop-types";
import Column from "./Column";
import { fetchCategories } from "../../util/api_util";
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], questionActive: false };
  }

  componentDidMount() {
    fetchCategories().then(categories => this.setState({ categories }));
  }

  handleQuestion = (value, category) => e => {
    this.setState({ questionActive: true });
  };

  render() {
    const { categories, questionActive } = this.state;
    return (
      <article>
        {!questionActive ? (
          <ul id="categories">
            {categories.map(cat => (
              <li key={cat.title}>
                <Column handleQuestion={this.handleQuestion} category={cat} />
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    );
  }
}

Game.defaultProps = {
  categories: []
};

Game.propTypes = {
  categories: PropTypes.array
};

export default Game;
