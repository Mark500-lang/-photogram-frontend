import React, { useState, useEffect } from "react";
import "./SuggestedFollows.css";

function SuggestedFollows({ users, onFollow }) {
  const [followedUsers, setFollowedUsers] = useState([]);

  useEffect(() => {
    const storedFollowedUsers = localStorage.getItem("followedUsers");
    if (storedFollowedUsers) {
      setFollowedUsers(JSON.parse(storedFollowedUsers));
    }
  }, []);

  const toggleFollow = (userId) => {
    setFollowedUsers((prevFollowedUsers) => {
      const isFollowing = prevFollowedUsers.includes(userId);
      onFollow(!isFollowing);

      const updatedFollowedUsers = isFollowing
        ? prevFollowedUsers.filter((id) => id !== userId)
        : [...prevFollowedUsers, userId];

      localStorage.setItem("followedUsers", JSON.stringify(updatedFollowedUsers));

      return updatedFollowedUsers;
    });
  };

  const filteredUsers = users.filter((user) => !followedUsers.includes(user.id));

  return (
    <div className="suggested-follows bg-dark text-white">
      <h5 className="mb-3">Suggested for you</h5>
      <ul className="list-unstyled">
        {filteredUsers.map((user) => (
          <li key={user.id} className="d-flex align-items-center mb-2">
            <img
              className="profile-picture"
              src={user.profile_picture}
              alt={user.username}
            />
            <div className="ms-3">
              <p className="mb-0">{user.username}</p>
              <button
                type="button"
                className={`btn btn-${followedUsers.includes(user.id) ? "outline-light" : "light"} btn-sm`}
                onClick={() => toggleFollow(user.id)}
              >
                {followedUsers.includes(user.id) ? "Following" : "Follow"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestedFollows;
