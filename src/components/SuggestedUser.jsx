import React, { useState } from "react";
import "./SuggestedFollows.css";

function SuggestedFollows({ users }) {
  
  const [followStatus, setFollowStatus] = useState(
    users.reduce((acc, user) => {
      acc[user.id] = false;
      return acc;
    }, {})
  );

  const toggleFollow = (userId) => {
    setFollowStatus((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };


  return (
    <div className="suggested-follows">
      <h5 className="mb-3">Suggested for you</h5>
      <ul className="list-unstyled">
        {users.map((user) => (
          <li key={user.id} className="d-flex align-items-center mb-2">
            <img
              className="profile-picture"
              src={user.profile_picture}
              alt={user.username}
            />
            <div className="ms-3">
              <p className="mb-0">{user.username}</p>
              <button type="button" className={`btn btn-${followStatus[user.id] ? "outline-" : ""}primary btn-sm`}
                onClick={() => toggleFollow(user.id)}
              >
                {followStatus[user.id] ? "Following" : "Follow"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestedFollows;
