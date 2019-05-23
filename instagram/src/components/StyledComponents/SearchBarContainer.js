import styled from "styled-components";

const SearchBarContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgb(248, 248, 248);
  .logo-container {
    display: flex;
    align-items: flex-end;
  }
  .fa-instagram {
    font-size: 40px;
  }
  .slash {
    font-size: 40px;
    font-family: "Times New Roman", Times, serif;
  }
  .logo-text {
    font-size: 35px;
    color: rgb(33, 105, 189);
    font-family: "Yellowtail", cursive;
    padding: none;
    margin: none;
  }
  .search-input {
    text-align: center;
    border: 1px solid lightgrey;
  }
`;

export default SearchBarContainer;
