import React from 'react';

function Login(props) {


    let styleLoginWindow = {

    }



    return (
        <div style={styleLoginWindow}>
        <h1>Register</h1>
          <h1>Login</h1>
            <input type={"text"} alt={"Enter your email"}/>
            <input type={"text"} alt={"Enter your password"}/>
            <p>Show password</p>
            <button>Sign in</button>
            <a href="">Forgot my password</a>
        </div>
    );
}

export default Login;