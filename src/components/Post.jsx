import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./Post.css";
import SuggestedFollows from './SuggestedFollows';

function Post({ post, user }) {

  const [comments, setComments] = useState(post.comments);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes?.count ?? 0);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('/users')
      .then(response => response.json())
      .then(users => {
        setUserData(users.slice(0, 6)); // limit suggestions to first 6 users
      });
  }, []);

  const handleLike = () => {
    setLiked(!liked);
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  const handleCommentSubmit = (commentText) => {
    const newComment = {
      id: comments.length + 1,
      comment: commentText,
      user: {
        username: `${user}`,
        //Replace "currentUser" with the username of the user posting the comment when integrating backend.
      },
    };
    setComments([...comments, newComment]);
  };

  return (
    
    <div className="post-container">
    
      <div id="post" className="card mb-4">
        {post && (
          <>
          <br/>
          <br/>

          <br/>

            <div className="card-header d-flex align-items-center">
              <img id="profile_post" src={post.user.profile_pic} alt="Profile" />
              <span className="ms-3">{post.user.username}</span>
            </div>

            <img className="card-img-top" id="post_pic" src={post.post_pic} alt="Post" />
            <div className="card-body">
              <button
                type="button"
                className={`btn btn-light btn-sm mb-2 ${liked ? "text-danger" : ""}`}
                onClick={handleLike}
              >
                <i className={`bi bi-heart${liked ? "-fill" : ""}`}></i>
                <span className="ms-3">{liked ? "Liked" : "Like"}</span>
              </button>
              <div className="card-text">
                <strong>{post.user.username}</strong>: {post.caption}
              </div>
              <div>
                {post.likes?.recentLiker?.username && (
                  <span>
                    {post.likes.recentLiker.username} and {likeCount - 1} others liked this
                  </span>
                )}
              </div>
              <div className="comments-section">
                {comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
                <CommentForm onCommentSubmit={handleCommentSubmit} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Post;
