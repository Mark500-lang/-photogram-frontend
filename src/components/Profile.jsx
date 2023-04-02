import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditProfile from "./EditProfile";



function Profile({ currentUser }) {

  const {name, username, profile_pic, background_image, bio, posts} = currentUser;
  console.log(currentUser);
  //console.log({name});
  
  const [editing, setEditing] = useState(false);

  // useEffect(() => {
  //   fetch("/logged_in", {
  //     method: "GET",
  //     credentials: 'include',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   .then(res => res.json())
  //   .then(response => {
  //     setCurrentUser(response)
  //   })
  // }, [])
  // console.log(currentUser);
  

  // const handleEditSubmit = (updatedProfile) => {
  //   setUserData(updatedProfile);
  //   setEditing(false);
  // };



  return (
    <div>
    {currentUser && currentUser.map((user) => ( 
      <div
        key={user.id}
        className="profile"
        style={{
          width: "100vw",
          height: "300px",
          backgroundSize: "cover",
          backgroundImage: `url("${user.background_image}")`,
        }}
      >
        <div className="profile-pic">
          <img
            src={user.profile_pic}
            alt="profile pic"
            className="profile-image"
          />
          <p>{user.name}</p>
        </div>
        <div className="follows">
          <p className="username">@{user.username}</p>
          <ul className="posts-following">
            <li>{user.posts.length} Posts</li>
            <li>213 following</li>
            <li>514 followers</li>
          </ul>
          <p>{user.bio}</p>
          <Link style={{color: "white", padding: "10px"}} className="nav-link" to="/home/profile/edit-profile">
                <button onClick={() => setEditing(!editing)}>Edit Profile</button>
              </Link>
        </div>
      </div>
    ))}
    <div className="add_button">
      <Link
        style={{ color: "white", padding: "10px" }}
        className="nav-link"
        to="/home/profile/create-post"
      >
      <button class="btn btn-dark">
        <span class="material-icons-outlined">Create post</span>
      </button>      
  </Link>
  <div className="container">
  {currentUser.map((post) => (
    <div key={post.id} className="feed">
      {post.posts.map((post_image) => (
        <img
          key={post_image.id}
          src={post_image.post_pic}
          alt="postedImage"
          style={{
            cursor: "pointer",
            width: "200px",
            height: "200px",
            objectFit: "cover",
            margin: "10px"
          }}
        />
      ))}
    </div>
  ))}
</div>



       
    </div>
  </div>
);
}

export default Profile;
