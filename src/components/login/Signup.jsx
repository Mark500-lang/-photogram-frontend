import React from "react";
import { Link } from "react-router-dom";

function Signup({setIsLoginPage}){

  //to login page change
    const handleClick =(e)=>{
        e.preventDefault()
        setIsLoginPage(true)
    }
    return(
        <div id="wrapper-signup">
            <div className="signup-container">
                <p>Sign up to see photos and videos of your friends</p>
                <form className="main-signup" >
                        <div>
                            <input type="text" placeholder="Email" className="form-control"/>
                        </div>
                        <div>
                            <input type="text" placeholder="Full Name" className="form-control"/>
                        </div>
                        <div>
                            <input type="text" placeholder="Username" className="form-control"/>
                        </div>
                        <div>
                            <input type="password" placeholder="Password" className="form-control"/>
                        </div>
                        <Link to='/home'>
                            <button type="submit" className="btn" >Signup</button>
                        </Link>
                </form>
                <div className="sub-signup">
                        Have an account? <a href="" onClick={handleClick} >Log in</a>
                </div>
            </div>
            <div className="signup-image">
                <img src="./images/signup.svg" alt="dignup image"/>
            </div>
        </div>
    )
}

export default Signup;
/*
onSubmit={handleSubmit}
const initialState = {
  email: "",
  name: "",
  username: "",
  password: "",
};
const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newUser) => setFormData(initialState));
  }
*/