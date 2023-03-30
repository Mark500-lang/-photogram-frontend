import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";
import UserPost from "./UserPosts";
import { CurrentUserContext } from "./CurrentUserContext";
import styles from "./UserPosts";

function UserPosts({ post }) {
  const currentUser = useContext(CurrentUserContext);
  const [userPosts, setUserPosts] = useState([]);

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
