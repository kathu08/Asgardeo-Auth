import React from "react";
import {useAuthContext} from "@asgardeo/auth-react";

const Login = () => {
    const {signOut} = useAuthContext();
    return(
        <div>
            <h1>You are logged in</h1>
            <button onClick={() => signOut()}>Logout</button>
        </div>
    )
}

export default Login;