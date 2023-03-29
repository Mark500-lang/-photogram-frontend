import React from "react";

function Signup({setIsLoginPage}){

    const handleClick =(e)=>{
        e.preventDefault()
        setIsLoginPage(true)
    }
    return(
        <main>
            <p>Sign up to see photos and videos of your friends</p>
            <div className="container">
                <form action="">
                    <input type="text" placeholder="Mobile Number or Email"/>
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button>Sign up</button>
                </form>
            </div>
            <div className="option">
                <p>Have an account? <a href="" onClick={handleClick} >Log in</a></p>
            </div>
        </main>
    )
}

export default Signup;