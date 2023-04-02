import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditProfile from "./EditProfile";



function Profile({userData}) {
  const [currentuserData, setUserData] = useState([]);
  const [editing, setEditing] = useState(false);

  fetch('http://localhost:3000/loggedin')
  .then(response => response.json())
  .then(users => {setUserData(currentuserData)},

    
[]);

console.log(currentuserData);
  

  const handleEditSubmit = (updatedProfile) => {
    setUserData(updatedProfile);
    setEditing(false);
  };

  return (
    <div>
      <div
        className="profile"
        style={{
          width: "100vw",
          height: "300px",
          backgroundSize: "cover",
          backgroundImage: `url("${currentuserData.background_image}")`,
        }}
      >
        {editing ? (
          <EditProfile userProfile={currentuserData} onSubmit={handleEditSubmit} />
        ) : (
          <>
            <div className="profile-pic">
              <img
                src={currentuserData.profile_picture}
                alt="profile pic"
                className="profile-image"
              ></img>
              <p>{currentuserData.name}</p>
            </div>
            <div className="follows">
              <p className="username">@{currentuserData.username}</p>
              <ul className="posts-following">
                <li>{currentuserData.posts.length} Posts</li>
                <li>213 following</li>
                <li>514 followers</li>
              </ul>
              <p>{currentuserData.bio}</p>
              <button onClick={() => setEditing(!editing)}>Edit Profile</button>
            </div>
          </>
        )}
      </div>
      <div className="add_button">
        <Link style={{color: "white", padding: "10px"}} className="nav-link" to="/home/profile/create-post">
          <span className="material-symbols-outlined">add_circle</span>
        </Link>
      </div>
      <div className="container">
        {currentuserData.posts.map((post) => (
          <div key={post.id} className="feed">
            <img
              src={post.image}
              alt="postedImage"
              style={{
                cursor: "pointer",
                width: "200px",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
