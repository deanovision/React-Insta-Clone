import React, { Component } from "react";
import dummyData from "../src/dummy-data";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import Login from "./components/Login/Login";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    };
  }
  componentDidMount() {
    this.setState({
      postData: dummyData,
      loggedIn: localStorage.getItem("loggedIn"),
      username: localStorage.getItem("username"),
      password: ""
    });
  }
  handleLogin = () => {
    if (this.state.loggedIn === false) {
      localStorage.setItem("loggedIn", true);
    } else {
      localStorage.removeItem("loggedIn", false);
    }
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  };
  handleSearch = event => {
    if (event.target.value !== "") {
      const filteredList = dummyData.filter(listItem => {
        return listItem.username.includes(event.target.value);
      });
      this.setState({
        postData: filteredList
      });
    } else {
      this.setState({
        postData: dummyData
      });
    }
  };
  addCredentials = event => {
    localStorage.setItem(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    console.log(localStorage.getItem("loggedIn"));
    return (
      <div className="App">
        <ComponentFromWithAuthenticate
          handleLogin={this.handleLogin}
          loggedIn={this.state.loggedIn}
          postData={this.state.postData}
          addCredentials={this.addCredentials}
          username={this.state.username}
          password={this.state.password}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default App;
