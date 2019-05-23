import styled from "styled-components";

const LoginButton = styled.button`
  background: rgb(33, 105, 189);
  opacity: 0.7;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 30px;
  color: white;
  border: none;
  margin-top: 10px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &:active {
    background: red;
  }
`;

export default LoginButton;
