import React from "react";

const withAuthenticate = PostsPage => Login =>
  class extends React.Component {
    render() {
      if (this.props.loggedIn) {
        return (
          <PostsPage
            postData={this.props.postData}
            username={this.props.username}
            handleLogin={this.props.handleLogin}
            handleSearch={this.props.handleSearch}
          />
        );
      } else {
        return (
          <Login
            handleLogin={this.props.handleLogin}
            addCredentials={this.props.addCredentials}
            username={this.props.username}
            password={this.props.password}
          />
        );
      }
    }
  };
export default withAuthenticate;
