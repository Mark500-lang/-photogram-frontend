import React, { useState } from "react";

function CommentForm({ onCommentSubmit }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== "") {
      onCommentSubmit(e, commentText);
      setCommentText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={commentText}
          placeholder="Add a comment..."
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default CommentForm;
