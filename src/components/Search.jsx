import React, { useEffect } from "react";
import "./Search.css";
import mockData from "../mockData.js";
import { FiSearch } from "react-icons/fi";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import CommentForm from "./CommentForm";

function Search() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleImageClick = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleLike = () => {
    setLiked(!liked);
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCommentSubmit = (e, commentInput) => {
    e.preventDefault();
    if (commentInput.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          user: { username: "current_user" },
          comment: commentInput,
        },
      ]);
      setCommentInput("");
    }
  };

  useEffect(() => {
    if (selectedPost) {
      setLikeCount(selectedPost.likes.count);
      setComments(selectedPost.comments);
    }
  }, [selectedPost]);

  return (
    <>
      <div className="search-container" style={{ width: "400px" }}>
        <span className="ms-3">
          <FiSearch className="search-icon" />
        </span>
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div className="feed">
        {mockData.map((allPosts) => (
          <img
            key={allPosts.id}
            src={allPosts.image}
            alt={allPosts.caption}
            onClick={() => handleImageClick(allPosts)}
            style={{
              cursor: "pointer",
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
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
                src={selectedPost.image}
                alt={selectedPost.caption}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <div>
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
                <p>
                  <strong>{likeCount} likes</strong>
                </p>
              </div>
              <h3>{selectedPost.user.username}</h3>
              <h4>{selectedPost.caption}</h4>

              {comments.map((comment) => (
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

export default Search;
