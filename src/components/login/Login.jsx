import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from '../Profile.jsx';

function Login({isLoginPage, setIsLoginPage}){

    const [userData, setUserData] = useState();

    const [formData, setFormData]= useState({
        username: "",
        password: ""
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
        .then(data=> console.log("tyrtyr"))
    };

    const handleOnChange=(event)=>{
        formData[event.target.name]=event.target.value
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }
    const handleClick =(e)=>{
        e.preventDefault()
        setIsLoginPage(!isLoginPage)
    }

    return(
        <div id="wrapper">
            <div className="login-image">
                <img src="./images/login.png" alt="login image"/>
            </div>
            <div className="login-container">
                <img src="./images/photogram_logo4.svg"></img>
                <div className="main-content">
                    
                    <form className="l-part" onSubmit={handleSubmit}>
                        <div>
                            <input name='username' type="text" placeholder="Username" value={formData.username} onChange={handleOnChange} className="form-control" />
                        </div>
                        <div className="overlap-text">
                            <input name='password' type="password" placeholder="Password" value={formData.password} onChange={handleOnChange} className="form-control" />
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <Link to='/home'>
                            
                        </Link>
                </form>
            </div>
            <div className="sub-content">
                <div className="s-part">
                    Don't have an account?<a href="" onClick={handleClick} >Sign up</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login;
/*<Profile userData={userData}/>*/