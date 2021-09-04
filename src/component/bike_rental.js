import React,{useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Card from './rent_cards'

const Rent = () => {

    const [hire, setHire] = useState([]);

    useEffect(() => {
        getHire();
    }, []);

    const getHire = async() => {
        const response = await fetch(`http://localhost:8000/bike`);
        const data = await response.json();
        console.log(data)
        setHire(data);
    };
    
        if (!localStorage.getItem('token') || localStorage.getItem('token') === 'Wrong credentials'){
            return <Redirect to ="/" />
        };

    return(
        <div>
            <div className="providers">
                <h1>Choose From our Hires</h1>
                <hr/>
                <div className="cards">
                    {hire.map(hires =>(
                        <Card 
                            key = {hires.firstname}
                            first = {hires.firstname}
                            user = {hires.username}
                            last = {hires.lastname}
                            hourly = {hires.hourly}
                            daily = {hires.daily}
                            initial = {hires.initials}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Rent;