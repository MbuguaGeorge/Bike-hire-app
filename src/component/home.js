import {Link} from 'react-router-dom'
import React, {useEffect, useRef, useState} from 'react';
import Signup from './signup';

function Home(){

    const [register, setRegister] = useState(false);

    function clickHandler(){
        setRegister(prevRegister => !prevRegister)
    };

    const menuRef = useRef();

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

    return(
        <div>
            <section>
                <div className="sign" style={{display: register ? "flex" : "none"}} ref={menuRef}>
                    <Signup />
                </div>
                <div className="home__page" style={{backgroundColor: register ? "black" : ""}} >
                    <div className="cover__page">
                        <h2>Bike rental services</h2>
                        <p>We provide a reliable platform for hiring and renting out bikes.</p>
                        <div className="forms">
                            <button onClick={clickHandler} >Sign up</button>
                            <Link to="/login"><button>Log in</button></Link>
                        </div>  
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;