import React,{Component} from 'react'


class Rent_Bike extends Component{

    state = {
        profile:{
            student: '',
            firstname: '',
            lastname: '',
            contact: '',
            hourly: '',
            daily: ''
        }
    }

    submit = (event) => {
        event.preventDefault();
        console.log(this.state.profile)
        fetch('http://127.0.0.1:8000/profile',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(this.state.profile)
        }).then (
            data => {
                console.log(data)
            }
        ).catch( error =>console.error(error))
    };

    inputChange = (event) => {
        const prof = this.state.profile;
        prof[event.target.name] = event.target.value;
        this.setState({profile : prof});
    };

    render(){
    return(
        <div>
            <div className="profile">
                <h1>Create a customized profile if you are interested in renting out your Bike.</h1>
                <form>
                    <h2>Username</h2>
                    <input 
                        type='text'
                        name='student'
                        value={this.state.profile.student}
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