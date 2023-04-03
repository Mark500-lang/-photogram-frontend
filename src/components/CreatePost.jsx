import React, { useState } from "react";

function CreatePost(){

    const initialstate = {
        post_pic: "",
        caption: ""};
    const [formData, setFormData] = useState(initialstate);
      
    console.log(formData);
      
    const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/posts", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",

        },
        body: JSON.stringify({
        post_pic: formData.post_pic,
        caption: formData.caption,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
        alert(data.notice);
        });
    };
    
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          post_pic: name === "post_pic" ? value : prevState.post_pic,
          caption: name === "caption" ? value : prevState.caption
        }));
    };
    

    return(
        <form className="create-post-form" onSubmit={handleSubmit}>
            <h4>Share a photo with your friends</h4>
            <div className="form-group">
                
                <input name="post_pic" type="text" placeholder="picture url..." value={formData.post_pic} onChange={handleOnChange} className="form-control"></input>
            </div>
            <div className="form-group">
                
                <input name="caption" placeholder="caption..." value={formData.caption} onChange={handleOnChange} className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Post</button>
        </form>
    )
}

export default CreatePost;