import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditProfile from "./EditProfile";

function Profile({userData}) {
  const mockposts = [
    {
      id: 1,
      name: "Henrique Sousa",
      username: "justhenrique",
      profile_picture:
        "https://i.pinimg.com/564x/2a/99/10/2a9910d531b6468738bdb31772c4dc7e.jpg",
      background_image:
        "https://i.pinimg.com/564x/ad/73/0a/ad730ad183fe0203c733a92bf273246d.jpg",
      bio: "UI Designer + Designer + Front-end developer Jr. Student in Moringa School.",
      posts: [
        {
          id: 1,
          image: "assets/img/img17.jpg",
        },
        {
          id: 2,
          image: "assets/img/img19.jpg",
        },
        {
          id: 3,
          image:
            "https://i.pinimg.com/564x/6d/61/19/6d6119a3231db739b01676cc59db8666.jpg",
        },
      ],
    },
  ];
  const [userProfile, setUserProfile] = useState(mockposts[0]);
  const [editing, setEditing] = useState(false);

  const handleEditSubmit = (updatedProfile) => {
    setUserProfile(updatedProfile);
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
          backgroundImage: `url("${userProfile.background_image}")`,
        }}
      >
        {editing ? (
          <EditProfile userProfile={userProfile} onSubmit={handleEditSubmit} />
        ) : (
          <>
            <div className="profile-pic">
              <img
                src={userProfile.profile_picture}
                alt="profile pic"
                className="profile-image"
              ></img>
              <p>{userProfile.name}</p>
            </div>
            <div className="follows">
              <p className="username">@{userProfile.username}</p>
              <ul className="posts-following">
                <li>{userProfile.posts.length} Posts</li>
                <li>213 following</li>
                <li>514 followers</li>
              </ul>
              <p>{userProfile.bio}</p>
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
        {userProfile.posts.map((post) => (
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
