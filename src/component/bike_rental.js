import React,{useEffect, useState} from 'react';
import Card from './rent_cards'

const Rent = () => {

    const [hire, setHire] = useState([]);

    useEffect(() => {
        getHire();
    }, []);

    const getHire = async() => {
        const response = await fetch(`http://localhost:8000/userlist`);
        const data = await response.json();
        console.log(data)
        setHire(data);
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
                            last = {hires.lastname}
                            hourly = {hires.hourly}
                            daily = {hires.daily}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Rent;