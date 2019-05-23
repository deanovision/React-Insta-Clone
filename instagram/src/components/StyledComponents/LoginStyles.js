import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgb(243, 243, 243);
    -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
    width: 500px;
    height: 250px;
    div {
      padding-bottom: 10px;
    }
    input {
      width: 300px;
      height: 30px;
      font-size: 14px;
    }
    h2 {
      font-size: 36px;
      font-family: "Yellowtail", cursive;
    }
    span {
      color: rgb(33, 105, 189);
    }
  }
`;

export default LoginContainer;
