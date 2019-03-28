import React from "react";
import "./post-container.css";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="thumbnail-container">
          <img
            src={props.postData.thumbnailUrl}
            alt={props.postData.username}
          />
        </div>
        <div>
          <strong>{props.postData.username}</strong>
        </div>
      </div>
      <div className="img-container">
        <img src={props.postData.imageUrl} alt={props.postData.username} />
      </div>
      <CommentSection
        comments={props.postData.comments}
        likes={props.postData.likes}
        timestamp={props.postData.timestamp}
        username={props.username}
        handleChanges={props.handleChanges}
        addComment={props.addComment}
        clearInput={props.clearInput}
      />
    </div>
  );
};
PostContainer.propTypes = {
  postData: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  })
};
export default PostContainer;
