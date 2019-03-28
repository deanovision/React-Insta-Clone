import React, { Component } from "react";
import "../../App.css";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: []
    };
  }
  // handleSearch = event => {
  //   console.log(event.target.value);
  //   const filteredPost = this.state.postData.filter(postData => {
  //     return postData.username === event.target.value;
  //   });
  //   this.setState({
  //     postData: filteredPost
  //   });
  //   console.log(filteredPost);
  // };
  render() {
    return (
      <div className="PostsPage">
        <div className="search">
          <SearchBar
            handleSearch={this.handleSearch}
            handleLogin={this.props.handleLogin}
            handleSearch={this.props.handleSearch}
          />
        </div>
        {this.props.postData.map((post, index) => {
          return (
            <PostContainer
              className="post-container"
              key={index}
              postData={post}
              handleChanges={this.props.handleChanges}
              addComment={this.props.addComment}
              clearInput={this.props.clearInput}
              username={this.props.username}
            />
          );
        })}
      </div>
    );
  }
}
export default PostsPage;
