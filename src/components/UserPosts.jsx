import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import styles from "./UserPosts";
import CommentForm from "./CommentForm";

function UserPosts({ post }) {
  const currentUser = useContext(CurrentUserContext);
  const [userPosts, setUserPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes?.count ?? 0);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setUserPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: comments.length + 1,
      user: {
        username: "currentUser", // Replace this with the current user's username
      },
      comment: commentInput,
    };
    setComments([...comments, newComment]);
    setCommentInput("");
  };

  const handleImageClick = (post) => {
    setSelectedPost(post);
    setShowModal(true);
    setLikes(post.likes.count);
    setComments(post.comments);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className={styles.profile}
        style={{ width: "400px", height: "400px", objectFit: "cover" }}
      >
        {userPosts.map((userpost) => (
          <img
            key={userpost.id}
            src={userpost.post_pic}
            alt={userpost.caption}
            onClick={() => handleImageClick(userpost)}
            className={styles.img}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        ))}
      </div>

      {selectedPost && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Post Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <img
                src={post.image}
                alt={post.caption}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <button
                type="button"
                className={`btn btn-light btn-sm mb-2 ${
                  liked ? "text-danger" : ""
                }`}
                onClick={handleLike}
              >
                <i className={`bi bi-heart${liked ? "-fill" : ""}`}></i>
                <span className="ms-3">{liked ? "Liked" : "Like"}</span>
              </button>
              <h3>{post.caption}</h3>
              <p>
                <strong>{post.likes.count} likes</strong>
              </p>
              {post.comments.map((comment) => (
                <div key={comment.id}>
                  <strong>{comment.user.username}: </strong>
                  <span>{comment.comment}</span>
                </div>
              ))}
              <CommentForm onCommentSubmit={handleCommentSubmit} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default UserPosts;
