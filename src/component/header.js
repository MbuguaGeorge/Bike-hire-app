import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

function Header(){

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/cur/`).then(
            res => {
                setUser({user : res.data})
            }
        )

        axios.get(`http://127.0.0.1:8000/userlist/`).then(
            res => {
                setProfile({profile : res.data})
            }
        )

    }, [])

    const token = localStorage.getItem('token');

    let header;

    let user_profile;

    if (profile){
        user_profile = (
            <header>
                <nav>
                    <div className="logo">
                        <h1>bikie</h1>
                    </div>
                    <ul>
                        <li>
                            <Link to="/bike_rental">Bike Hire</Link>
                        </li>
                        <li>
                            <Link to="/profile">profile</Link>
                        </li>
                        <li>
                            <h3>Logout</h3>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }else{
        user_profile = (
            <header>
                <nav className="active">
                    <div className="logo">
                        <h1>bikie</h1>
                    </div>
                    <ul>
                        <li>
                            <Link to="/bike_rental">Bike Hire</Link>
                        </li>
                        <li>
                            <Link to="/rent_a_bike">Rent a Bike</Link>
                        </li>
                        <li>
                            <h3>Logout</h3>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }

    if (token){
        header = user_profile
    }
    else{
        header = (
            <header>
                <nav>
                    <div className="logo">
                        <h1>bikie</h1>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/bike_rental">Bike Hire</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/rent_a_bike">Rent a Bike</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }

    console.log(user)

    console.log(profile)

    return(
        <div>
            {header}
        </div>
    )
}

export default Header;