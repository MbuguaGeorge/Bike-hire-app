import cancel from '../images/cancel.png'

function Book(){

    return(
        <div className="bike__booking" >
            <div className="booking__container">
                <header>
                    <ol>
                        <li><h2>Book</h2></li>
                        <li><img src={cancel} alt="cross"/></li>
                    </ol>
                </header>
                <div className="booking__details">
                    <main>
                        <p>Please confirm that you would like to hire this bike</p>
                        <h3>Your Information:</h3>
                        <ul>
                            <li>
                                <h4>Name <span>*</span></h4>
                                <input type="text" name="name" />
                            </li>
                            <li>
                                <h4>Phone <span>*</span></h4>
                                <input type="text" name="phone" />
                            </li>
                            <li>
                                <h4>From which location ?  <span>*</span></h4>
                                <select>
                                    <option value="choose" >Choose...</option>
                                    <option value="college">College Campus</option>
                                    <option value="market">Market</option>
                                    <option value="nyawita">Nyawita</option>
                                    <option value="gv">Green Valley</option>
                                    <option value="botanic">Botanic</option>
                                </select>
                            </li>
                            <li>
                                <h4>More info</h4>
                                <textarea />
                            </li>
                        </ul>
                        <ol>
                            <li>
                                <button style={{color: "white", backgroundColor: "coral" }} >Book</button>
                            </li>
                            <li>
                                <button>Cancel</button>
                            </li>
                        </ol>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Book;