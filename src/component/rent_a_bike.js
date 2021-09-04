import React,{Component} from 'react'
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Rent_Bike extends Component{

    state = {
        profile:{
            username: '',
            firstname: '',
            lastname: '',
            contact: '',
            hourly: '',
            daily: ''
        },
        cur_user: []
    }

    componentDidMount(){

        axios.get(`http://127.0.0.1:8000/cur/`).then(
            res => {
                this.setState({
                    cur_user: res.data.user.id
                })
            }
        )

        
        
    }

    submit = (event) => {
        event.preventDefault();
        const data = (this.state.profile)
        console.log(this.state.profile)
        axios.post('http://127.0.0.1:8000/profile/', data).then (
            res => {
                console.log(res)
            }
        ).catch( error =>console.error(error))
    };

    inputChange = (event) => {
        const prof = this.state.profile;
        prof[event.target.name] = event.target.value;
        this.setState({profile : prof});
    };

    render(){
        if (!localStorage.getItem('token') || localStorage.getItem('token') === 'Wrong credentials'){
            return <Redirect to ="/" />
    }
    console.log(this.state.cur_user)
    return(
        <div>
            <div className="profile">
                <h1>Create a customized profile if you are interested in renting out your Bike.</h1>
                <form>
                    <h2>Username</h2>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.profile.username = this.state.cur_user}
                        onChange={this.inputChange}
                    />
                    <h2>First Name</h2>
                    <input 
                        type='text'
                        name='firstname'
                        value={this.state.profile.firstname}
                        onChange={this.inputChange}
                    />
                    <h2>Last Name</h2>
                    <input 
                        type='text'
                        name='lastname'
                        value={this.state.profile.lastname}
                        onChange={this.inputChange}
                    />
                    <h2>Contact No.</h2>
                    <input 
                        type='text'
                        name='contact'
                        value={this.state.profile.contact}
                        onChange={this.inputChange}
                    />
                    <h2>Hourly Rate</h2>
                    <input 
                        type='text'
                        name='hourly'
                        value={this.state.profile.hourly}
                        onChange={this.inputChange}
                    />
                    <h2>Daily Rate</h2>
                    <input 
                        type='text'
                        name='daily'
                        value={this.state.profile.daily}
                        onChange={this.inputChange}
                    />
                    <button onClick={this.submit} >Submit</button>
                </form>
            </div>
        </div>
    )
    }
}

export default Rent_Bike;