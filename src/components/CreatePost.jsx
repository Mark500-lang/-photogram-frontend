import React, { useState } from "react";

function CreatePost(){

    const [formData, setFormData]= useState({
        post_pic: "",
        caption: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/login" , {
            method: "POST",
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
            <h4>Share a photo with your friends</h4>
            <div className="form-group">
                
                <input name="post_pic" type="text" placeholder="picture url..." value={formData.post_pic} onChange={handleOnChange} className="form-control"></input>
            </div>
            <div className="form-group">
                
                <input name="caption" placeholder="caption..." value={formData.caption} onChange={handleOnChange} className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primary" >Post</button>
        </form>
    )
}

export default CreatePost;