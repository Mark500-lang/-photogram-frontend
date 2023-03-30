import React from "react";

function CreatePost(){
    return(
        <form className="create-post-form">
            <h4>Share a photo with your friends</h4>
            <div className="form-group">
                
                <input type="text" placeholder="picture url..." className="form-control"></input>
            </div>
            <div className="form-group">
                
                <input placeholder="caption..." className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-primary" >Post</button>
        </form>
    )
}

export default CreatePost;