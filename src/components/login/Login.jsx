import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../Profile";
import UserContext from "../UserContext";

function Login({ setIsLoginPage, isLoginPage }) {
const { currentUser, setCurrentUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password_digest: "",
  });

  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
            localStorage.setItem("token", data.token);
            setCurrentUser(data.user);
            history.push("/profile");
          } else {
            alert("Invalid credentials");
          }
        setUserData(data);
      });
  };

  const handleOnChange = (event) => {
    formData[event.target.name] = event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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
        .then(data=> {
            setUserData(data),
            <Profile userData={userData}/>
        })
    };

  if (userData) {
    return <Profile userData={userData} />;
  }

  return (
    <div id="wrapper">
      <div className="login-image">
        <img src="./images/login.png" alt="logoimage" />
      </div>
      <div className="login-container">
        <img src="./images/photogram_logo4.svg" alt="Photogram logo" />
        <div className="main-content">
          <form className="l-part" onSubmit={handleSubmit}>
            <div>
              <input
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleOnChange}
                className="form-control"
              />
            </div>
            <div className="overlap-text">
              <input
                name="password_digest"
                type="password"
                placeholder="Password"
                value={formData.password_digest}
                onChange={handleOnChange}
                className="form-control"
              />
            </div>
            <Link to="/home">
              <button type="button" className="btn">
                Login
              </button>
            </Link>
          </form>
        </div>
        <div className="sub-content">
          <div className="s-part">
            Don't have an account?
            <a href="/signup" onClick={handleClick}>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
