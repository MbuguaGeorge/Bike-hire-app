import {Link} from 'react-router-dom'

const Card = ({first,last,hourly,daily,initial}) => {
    return(
        <div>
                <div className="card__provider">
                    <Link to="/providers">
                        <header>
                            <span initials={initial}></span>
                            <h2>{first} {last}</h2>
                        </header>
                        <main>
                            <ul>
                                <li><span>Hourly Rate</span> ${hourly}</li>
                                <li><span>Daily Rate</span> ${daily}</li>
                                <li><span>Rent Now</span> Available</li>
                            </ul>
                        </main>
                    </Link>
                </div>
        </div>
    )
}
export default Card;