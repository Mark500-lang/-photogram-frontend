import React, {useState} from "react";
import Login from "./Login";
import Signup from "./Signup";

function LoginSignup(){

    const [isLoginPage, setIsLoginPage] = useState(true);

    return(
        <div>
            {
                isLoginPage === true ?
                <Login setIsLoginPage={setIsLoginPage} isLoginPage={isLoginPage}/>
                :
                <Signup setIsLoginPage={setIsLoginPage}/>   
            }
        </div>
    )
}

export default LoginSignup;