import React from "react";

function Login({setIsLoginPage, isLoginPage}){
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
                    
                    <form className="l-part">
                        <div>
                            <input type="text" placeholder="Username" className="form-control" />
                        </div>
                        <div className="overlap-text">
                            <input type="password" placeholder="Password" className="form-control" />
                        </div>
                        <button type="button" className="btn">Login</button>
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