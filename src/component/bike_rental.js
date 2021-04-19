import Card from './rent_cards'

function Rent(){
    return(
        <div>
            <div className="providers">
                <h1>Choose From our Hires</h1>
                <hr/>
                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Rent;