import React from "react";
import "./SuggestedFollows.css";

function SuggestedFollows({ users }) {
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
              <button type="button" className="btn btn-primary btn-sm">
                Follow
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestedFollows;
