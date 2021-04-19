import React from 'react'

function Login() {
    return (
        <div className="login" >
            <h2>Login</h2>
            <form>
                <input 
                type="text"
                name="username"
                placeholder="username..."
                />
                <input 
                type="password"
                name="password"
                placeholder="password..."
                />
                <input 
                type="submit"
                value="Login"
                className="btn"
                />
            </form>
        </div>
    )
}

export default Login;