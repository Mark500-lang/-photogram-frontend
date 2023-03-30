import React, { useEffect } from "react";
import "./Search.css";
import mockData from "../mockData.js";
import { FiSearch } from "react-icons/fi";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function Search() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

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

  useEffect(() => {
    if (selectedPost) {
      setLikeCount(selectedPost.likes.count);
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
              <h3>{selectedPost.caption}</h3>
              <p>
                <strong>{selectedPost.likes.count} likes</strong>
              </p>
              {selectedPost.comments.map((comment) => (
                <div key={comment.id}>
                  <strong>{comment.user.username}: </strong>
                  <span>{comment.comment}</span>
                </div>
              ))}
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
