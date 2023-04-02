import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup({ setIsLoginPage }) {
  const handleClick = (e) => {
    e.preventDefault();
    setIsLoginPage(true);
  };

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
  password_confirmation: "",
};
const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(FormData)
  }
  console.log(formData);

function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newUser) => setFormData(initialState));
  }
  //to login page change
    // const handleClick =(e)=>{
    //     e.preventDefault()
    //     setIsLoginPage(true)
    // }
    return(
        <div id="wrapper-signup">
            <div className="signup-container">
                <p>Sign up to see photos and videos of your friends</p>
                <form className="main-signup" onSubmit={handleSubmit}>

                        <div>
                            <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} className="form-control"/>
                        </div>
                        <div>
                            <input name="username" type="text" placeholder="Username" value={formData.username} onChange={handleChange} className="form-control"/>
                        </div>
                        <div>
                            <input name="email" type="text" placeholder="Email" value={formData.email} onChange={handleChange} className="form-control"/>
                        </div>
                        <div>
                            <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className="form-control"/>
                        </div>
                        <div>
                            <input name="password_confirmation" type="password" placeholder="Confirm Password" value={formData.password_confirmation} onChange={handleChange} className="form-control"/>
                        </div>
                        <Link to='/home'>
                            <button type="submit" className="btn" onClick={handleSubmit}>Signup</button>
                        </Link>
                </form>
                <div className="sub-signup">
                        Have an account? <a href="" onClick={handleClick} >Log in</a>
                </div>
                </div> 
                </div> 

          //  </div>
          //   <div className="signup-image">
          //       <img src="./images/signup.svg" alt="dignup image"/>
          //   </div>
          // </div> 


      
    
    
  );
}

export default Signup;
