import React, { useState, useEffect } from "react";
import UserPosts from "./UserPosts";

import { Link } from "react-router-dom";

function Profile(){

    const mockposts=[
    {
        id: 1,
        name: "Henrique Sousa",
        username: "justhenrique",
        profile_picture: "https://i.pinimg.com/564x/2a/99/10/2a9910d531b6468738bdb31772c4dc7e.jpg",
        background_image: "https://i.pinimg.com/564x/ad/73/0a/ad730ad183fe0203c733a92bf273246d.jpg",
        bio: "UI Designer + Designer + Front-end developer Jr. Student in Moringa School.",
        posts: [
            {
                id: 1,
                image: "https://i.pinimg.com/564x/6d/61/19/6d6119a3231db739b01676cc59db8666.jpg",	    
            }
        ]
    }];

    const posts = mockposts.map(post=> (post.posts));
    return(
        <div>
            <div className="profile" style={{
                width: '100vw',
                height: '300px',
                backgroundSize: 'cover',
                backgroundImage: 'url("https://i.pinimg.com/564x/ad/73/0a/ad730ad183fe0203c733a92bf273246d.jpg")'
            }}>
                <div className="profile-pic">
                    {
                        mockposts.map((user) =>{
                            return(
                                <div key={user.id}>
                                    <img src={user.profile_picture} alt="profile pic" className="profile-image"></img>
                                    <p>{user.name}</p>
                                </div>
                            )
                            
                        })
                    }
                    
                </div>
                <div className="follows">
                    {
                        mockposts.map((user) =>{
                            return(
                                <div key={user.id}>
                                    <p className="username">@{user.username}</p>
                                    <ul className="posts-following">
                                        <li>{user.posts.length} Posts</li>
                                        <li>213 following</li>
                                        <li>514 followers</li>
                                    </ul>
                                    <p>{user.bio}</p> 
                                </div>
                            )
                            
                        })
                    }
                    <Link className="nav-link" to='/home/profile/edit-profile'>
                        <span><button>Edit Profile</button></span> 
                    </Link> 
                </div>
            </div>
            <div className="add_button">
                <Link className="nav-link" to='/home/profile/create-post'>
                    <span className="material-symbols-outlined">add_circle</span>
                </Link>
            </div>
            <div className="container">
                {
                            posts.map((post)=>{
                                return(
                                
                                    <div key={post.id} className="card">
                                        <img src={post.image} alt="post image"></img>
                                    </div>
                                )
                             })
                }
            </div>
        </div>
    )
}


export default Profile;
/*
const [profile, setProfile] = useState();
useEffect(()=>{
        fetch("/user",{
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
        .then(r=>r.json())
        .then((response)=>{
            setProfile(response)
        })
    });
*/