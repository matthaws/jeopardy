import React from "react";
import "./Columns.css";

const Column = ({ category, handleQuestion }) => {
  let score = 0;
  const getScore = () => {
    score = score + 200;
    return score;
  };

  const questionBoxes = [];

  while (score < 1000) {
    const thisScore = getScore();
    questionBoxes.push(
      <li
        onClick={handleQuestion(thisScore, category.id)}
        className="question-box"
        key={thisScore}
        score={thisScore}
      >
        {thisScore}
      </li>
    );
  }

  return (
    <section className="column">
      <div className="category-box">
        <h3>{category.title.toUpperCase()}</h3>
      </div>
      <ul className="questions">{questionBoxes}</ul>
    </section>
  );
};

export default Column;
