import React, { useState } from "react";

function EditProfile(){

    const [formData, setFormData]= useState({
        name: "",
        profile_pic: "",
        background_image: "",
        bio: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/user/:id" , {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response)=> response.json())
        .then(data=> console.log(data))
    };

    const handleOnChange=(event)=>{
        formData[event.target.name]=event.target.value
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }
    return(
        <form className="create-post-form" onSubmit={handleSubmit}>
            <h4>Edit Your Profile</h4>
            <div className="form-group">
                <label htmlFor="name">Change Name</label>
                <input name="name" type="text" placeholder="Change your name..." value={formData.name} onChange={handleOnChange}  className="form-control"></input>
            </div> 
            <div className="form-group">
                <label htmlFor="bio">Edit Bio</label>
                <input name="profile_pic" type="text" placeholder="Change your bio..." value={formData.profile_pic} onChange={handleOnChange}  className="form-control"></input>
            </div>
            <div className="form-group">
                <label htmlFor="profile picture">Change Your Profile Picture</label>
                <input name="background_image" type="text" placeholder="Change your profile picture..." value={formData.background_image} onChange={handleOnChange}  className="form-control"></input>
            </div>
            <div className="form-group">
                <label htmlFor="background image">Change Your background Image</label>
                <input name="bio" type="text" placeholder="Change your background picture..." value={formData.bio} onChange={handleOnChange} className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primary">Edit</button>
        </form>
    )
}

export default EditProfile;