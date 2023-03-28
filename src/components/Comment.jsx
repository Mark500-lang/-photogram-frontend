import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment">
      <strong>{comment.user.username}:</strong> {comment.comment}
    </div>
  );
}

export default Comment;
