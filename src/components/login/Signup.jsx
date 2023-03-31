import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup({ setIsLoginPage }) {
  const handleClick = (e) => {
    e.preventDefault();
    setIsLoginPage(true);
  };

  return (
    <div className="container-fluid" id="wrapper-signup">
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="signup-container">
            <h1 className="mb-4">Instagram</h1>
            <p>Sign up to see photos and videos of your friends</p>
            <form className="main-signup">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Signup
              </button>
            </form>
            <div className="sub-signup">
              Have an account?{" "}
              <a href="/login" onClick={handleClick}>
                Log in
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="signup-image">
            <img src="./images/signup.svg" alt="signupimage" />
          </div>
        </div>
      </div>
    </div>
  );
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
