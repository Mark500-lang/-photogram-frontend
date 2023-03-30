import React from "react";

function Signup({setIsLoginPage}){

    const handleClick =(e)=>{
        e.preventDefault()
        setIsLoginPage(true)
    }
    return(
        <div id="wrapper-signup">
            <div className="signup-image">
                <img src="./images/signup.svg" alt="dignup image"/>
            </div>
            <div className="signup-container">
                <p>Sign up to see photos and videos of your friends</p>
                <form className="main-signup">
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
                        <button type="button" className="btn">Signup</button>
                </form>
                <div className="sub-signup">
                        Have an account? <a href="" onClick={handleClick} >Log in</a>
                </div>
            </div>
        </div>
    )
}

export default Signup;