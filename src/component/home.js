import {Link} from 'react-router-dom'

function Home(){
    return(
        <div>
            <section>
                <div className="home__page">
                    <div className="cover__page">
                        <h2>Bike rental services</h2>
                        <p>We provide a reliable platform for hiring and renting out bikes.</p>
                        <div className="forms">
                            <Link to="/signup"><button>Sign up</button></Link>
                            <Link to="/login"><button>Log in</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;