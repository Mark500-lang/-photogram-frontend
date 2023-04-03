import React, { useState, useEffect } from "react";

function EditProfile({ currentUser }) {

  const [userId, setUserId]= useState([]);

  useEffect(() => {
    const ids = currentUser.map(user => user.id);
    setUserId(ids);
  }, [currentUser]);
  
  console.log(userId);


  const [formData, setFormData] = useState({
    name: "",
    profile_pic: "",
    background_image: "",
    bio: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(formData),
      })
      .then(response => {
            if (response.ok) {
                response.json().then((response) => console.log(response));
                alert('Profile Edited successfully!');
            //navigate('home/feed');
            } else {
              alert('Error editing profile');
            }
      })
    };

    const handleOnChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
    return (
      <div className="edit-profile">
        <form className="edit-profile-form" onSubmit={handleSubmit}>
          <h4>Edit Your Profile</h4>
          <div className="form-group">
            <label htmlFor="name">Change Name</label>
            <input
              name="name"
              type="text"
              placeholder="Change your name..."
              value={formData.name}
              onChange={handleOnChange}
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="bio">Edit Bio</label>
            <textarea
              name="bio"
              rows="3"
              placeholder="Change your bio..."
              value={formData.bio}
              onChange={handleOnChange}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="profile_pic">Change Your Profile Picture</label>
            <input
              name="profile_pic"
              type="text"
              placeholder="Change your profile picture..."
              value={formData.profile_pic}
              onChange={handleOnChange}
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="background_image">
              Change Your Background Image
            </label>
            <input
              name="background_image"
              type="text"
              placeholder="Change your background image..."
              value={formData.background_image}
              onChange={handleOnChange}
              className="form-control"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit} >
            Save Changes
          </button>
        </form>
      </div>
    );
  
}

export default EditProfile;
