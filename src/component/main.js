import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home'
import Rent from './bike_rental'
import About from './about'
import Rent_Bike from './rent_a_bike'
import Provider from './provider'
import Book from './booking'
import Profile from './profile'

const Main = () => (

    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bike_rental" component={Rent} />
        <Route path="/about" component={About} />
        <Route path="/rent_a_bike" component={Rent_Bike} />
        <Route path="/providers" component={Provider} />
        <Route path="/book" component={Book} />
        <Route path="/profile" component={Profile} />
    </Switch>
)

export default Main;