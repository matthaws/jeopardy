import React from "react";
import "./Login.css";

const Login = ({ updateUser, startGame, user }) => (
  <form className="login-form" onSubmit={startGame}>
    <label>
      Welcome Contestant, enter your name!<br />
      <input type="text" value={user} />
    </label>

    <input type="submit" value="Lets Play Jeopardy!" />
  </form>
);

export default Login;
