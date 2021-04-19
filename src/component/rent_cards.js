import {Link} from 'react-router-dom'

function Card(){
    return(
        <div>
                <div className="card__provider">
                    <Link to="/providers">
                        <header>
                            <span initials="JS"></span>
                            <h2>John Smith</h2>
                        </header>
                        <main>
                            <ul>
                                <li><span>Hourly Rate</span> $2</li>
                                <li><span>Daily Rate</span> $10</li>
                                <li><span>Rent Now</span> Available</li>
                            </ul>
                        </main>
                    </Link>
                </div>
        </div>
    )
}
export default Card;