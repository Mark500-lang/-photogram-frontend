import React from "react";

function EditProfile(){
    return(
        <form className="create-post-form">
            <h4>Edit Your Profile</h4>
            <div className="form-group">
                <label htmlFor="name">Change Name</label>
                <input placeholder="Change your name..." className="form-control"></input>
            </div>
            <div className="form-group">
                <label htmlFor="bio">Edit Bio</label>
                <input placeholder="Change your bio..." className="form-control"></input>
            </div>
            <div className="form-group">
                <label htmlFor="profile picture">Change Your Profile Picture</label>
                <input placeholder="Change your profile picture..." className="form-control"></input>
            </div>
            <div className="form-group">
                <label htmlFor="background image">Change Your background Image</label>
                <input placeholder="Change your background picture..." className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primary">Edit</button>
        </form>
    )
}

export default EditProfile;