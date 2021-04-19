import {Link} from 'react-router-dom'

function Header(){
    return(
        <div>
            <header>
                <nav>
                    <div className="logo">
                        <h1>Rent a bike</h1>
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
        </div>
    )
}

export default Header;