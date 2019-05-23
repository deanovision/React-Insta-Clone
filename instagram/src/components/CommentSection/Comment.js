import React from "react";
import PropTypes from "prop-types";
import "./comment.css";
// class Comment extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: this.props.newComment.text,
//       username: this.props.newComment.username
//     };
//   }
//   render() {
//     return (
//       <div className="comment-text">
//         <strong>{this.state.username} </strong>
//         {this.state.text}
//       </div>
//     );
//   }
// }
const Comment = props => {
  return (
    <div className="comment-text">
      <strong>{props.newComment.username} </strong>
      {props.newComment.text}
    </div>
  );
};
Comment.propTypes = {
  newComment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};
export default Comment;
