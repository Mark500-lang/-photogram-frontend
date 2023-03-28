import React from 'react';
import Comment from './Comment';
import './Post.css';

function Post({ post }) {
  // Render the post with its associated data
  return (
    <div id="post" className="card mb-4">
      {post && (
        <>
          <div className="card-header d-flex align-items-center">
            <img
              id="profile_post"
              src={post.user.profile_picture}
              alt="Profile"
            />
            <span className="ms-3">{post.user.username}</span>
          </div>
          <img className="card-img-top" id="post_pic" src={post.image} alt="Post" />
          <div className="card-body">
            <button type="button" className="btn btn-light btn-sm mb-2">
              <i className="bi bi-heart"></i> Like
            </button>
            <div className="card-text">{post.caption}</div>
            <div>
              {post.likes?.recentLiker?.username && (
                <span>
                  {post.likes.recentLiker.username} and {post.likes.count - 1}{' '}
                  others liked this
                </span>
              )}
            </div>
            <div>
              {post.comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Post;
