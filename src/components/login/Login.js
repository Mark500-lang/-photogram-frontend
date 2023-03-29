import React from "react";

function Login({setIsLoginPage, isLoginPage}){
    const handleClick =(e)=>{
        e.preventDefault()
        setIsLoginPage(!isLoginPage)
    }

    return(
        <div id="wrapper">
            <div className="main-content">
                <div className="header">
                    <img src="" alt=""/>
                </div>
                <div className="l-part">
                    <input type="text" placeholder="Username" className="input-1" />
                    <div className="overlap-text">
                        <input type="password" placeholder="Password" className="input-2" />
                        
                    </div>
                    <button type="button" className="btn"> Login</button>
                </div>
            </div>
            <div className="sub-content">
                <div className="s-part">
                    Don't have an account?<a href="" onClick={handleClick} >Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default Login;