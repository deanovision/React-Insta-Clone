import React from "react";
import SearchBarContainer from "../StyledComponents/SearchBarContainer";
//import "./search-bar.css";
// import styled from "styled-components";

// const SearchBarStlyes = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   background: rgb(248, 248, 248);
// `;

const SearchBar = props => {
  return (
    <SearchBarContainer>
      <div className="logo-container">
        <i className="fab fa-instagram" />
        <span className="slash"> | </span>
        <span className="logo-text">Photofy</span>
      </div>

      <input
        className="search-input"
        placeholder="&#8981; Search"
        type="text"
        onChange={props.handleSearch}
      />
      <div className="nav-right">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" onClick={props.handleLogin} />
      </div>
    </SearchBarContainer>
  );
};
export default SearchBar;
