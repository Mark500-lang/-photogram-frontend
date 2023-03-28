import React from "react";
import Comment from "./Comment";

function Post({ post }) {
  // Render the post with its associated data
  return (
    <div>
      {post && (
        <>
          <div>
            <img src={post.user.profile_picture} alt="Profile" />
            <span>{post.user.username}</span>
          </div>
          <img src={post.image} alt="Post" />
          <div>{post.caption}</div>
          <div>
            {post.likes.map((like) => (
              <span key={like.id}>{like.user.username} liked this</span>
            ))}
          </div>
          <div>
            {post.comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Post;
