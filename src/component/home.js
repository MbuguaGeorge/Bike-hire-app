import React, {useEffect, useRef, useState} from 'react';
import Signup from './signup';
import Login from './login';

function Home(){

    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false);

    function clickHandler(){
        setRegister(prevRegister => !prevRegister)
    };

    function loginHandler(){
        setLogin(prevLogin => !prevLogin )
    };

    const menuRef = useRef();
    const logRef = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!menuRef.current.contains(event.target)){
                setRegister(false);
            };
        };
            document.addEventListener("mousedown", handler);
            return () => {
                document.removeEventListener("mousedown", handler);
            };
    });

    useEffect(() => {
        const handle = (event) => {
            if (!logRef.current.contains(event.target)){
                setLogin(false);
            };
        };
            document.addEventListener("mousedown", handle);
            return () => {
                document.removeEventListener("mousedown", handle);
            };
    });

    return(
        <div>
            <section>
                <div className="sign" style={{display: register ? "flex" : "none"}} ref={menuRef}>
                    <Signup />
                </div>
                <div className="sign" style={{display: login ? "flex" : "none"}} ref={logRef}>
                    <Login />
                </div>
                <div className="home__page" style={{backgroundColor: register ? "black" : ""}} >
                    <div className="cover__page">
                        <h2>Bike rental services</h2>
                        <p>We provide a reliable platform for hiring and renting out bikes.</p>
                        <div className="forms">
                            <button onClick={clickHandler} style={{marginRight: '10px'}}>Sign up</button>
                            <button onClick={loginHandler} >Log in</button>
                        </div>  
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;