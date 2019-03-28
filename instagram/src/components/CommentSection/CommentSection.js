import React from "react";
import "./comment-section.css";
import Comment from "./Comment";
// import Timestamp from "./Timestamp";
import PropTypes from "prop-types";
// import Moment from "moment";
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      text: "",
      username: this.props.username,
      numberOfLikes: this.props.likes,
      likedPost: false
    });
  }
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleLikes = event => {
    this.setState({ likedPost: !this.state.likedPost });
    if (this.state.likedPost === false) {
      this.setState({ numberOfLikes: this.props.likes + 1 });
      event.target.className = "fas fa-heart";
      event.target.style.color = "red";
    } else {
      this.setState({ numberOfLikes: this.props.likes });
      event.target.className = "far fa-heart";
      event.target.style.color = "black";
    }
  };
  addComment = event => {
    if (event.key === "Enter") {
      const newComment = this.state.comments.slice();
      newComment.push({
        username: this.props.username,
        text: this.state.text
      });
      this.setState({
        comments: newComment
      });
    } else {
      return null;
    }
  };
  clearInput = event => {
    if (event.key === "Enter") {
      event.target.value = "";
    }
  };
  render() {
    return (
      <div className="comment-container">
        <i onClick={this.handleLikes} className="far fa-heart" />
        <i className="far fa-comment" />
        <div className="likes">
          <strong>{this.state.numberOfLikes} likes</strong>
        </div>
        {this.state.comments.map((comments, index) => {
          return <Comment key={index} newComment={comments} />;
        })}
        <input
          className="comment-input"
          type="text"
          name="text"
          placeholder="Add a comment..."
          onChange={this.handleChanges}
          onKeyDown={this.addComment}
          onKeyUp={this.clearInput}
        />
      </div>
    );
  }
}
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ),
  likes: PropTypes.number,
  timestamp: PropTypes.string
};
export default CommentSection;
