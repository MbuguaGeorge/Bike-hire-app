import React from 'react'

function Signup() {
    function clickHandler(){
        console.log('form was submitted')
    }
    return (
            <div className="signup">
            <h1>SIGNUP</h1>
                <form>
                    <input 
                        type="text"
                        name="username"
                        placeholder="username..."
                    />
                    <input 
                        type="text"
                        name="email"
                        placeholder="email.."
                    />
                    <input 
                    type="password"
                    name="password"
                    placeholder="password..." 
                    />
                    <input 
                        type="password"
                        name="confirm password"
                        placeholder="confirm password..."
                    />
                    <input 
                        type="submit"
                        value="Submit"
                        className="btn"
                        onClick = {clickHandler}
                    />
                </form>
            </div>
    )
}


export default Signup