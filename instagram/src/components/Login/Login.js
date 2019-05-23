import React from "react";
//import "./login.css";
import LoginButton from "../StyledComponents/Buttons";
import LoginContainer from "../StyledComponents/LoginStyles";

const Login = props => {
  return (
    <LoginContainer>
      <div className="login-container">
        <h2>
          Welcome to <span>Photofy</span>
        </h2>
        <div>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={props.addCredentials}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={props.addCredentials}
          />
        </div>
        <LoginButton onClick={props.handleLogin}>Login</LoginButton>
      </div>
    </LoginContainer>
  );
};
export default Login;
