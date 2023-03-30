import React from "react";
import "./Search.css";
import mockData from "../mockData.js";
import { FiSearch } from "react-icons/fi";
import UserPost from "./UserPosts";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";


function Search() {
    const [selectedPost, setSelectedPost] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleImageClick = (post) => {
      setSelectedPost(post);
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };

    return (
      <>
        <div className="search-container" style={{ width:"400px"}}>
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
              style={{ cursor: "pointer", width: "200px", height: "200px", objectFit: "cover" }}
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
