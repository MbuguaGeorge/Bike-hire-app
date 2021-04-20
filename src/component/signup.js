import React,{Component} from 'react';

class Signup extends Component{

    state = {
        details: {username: '', email: '', password: '', password2: ''}
    }

    submit = event => {
        event.preventDefault();
        console.log(this.state.details);
        fetch('http://127.0.0.1:8000/register', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(this.state.details)
        }).then(
            data => {
                console.log(data);
            }
        ).catch( error =>console.error(error) )
    }

    inputChange = event => {
        const detail = this.state.details;
        detail[event.target.name] = event.target.value;
        this.setState({details : detail});
    }

    render() {
        return (
                <div className="signup">
                <h1>SIGNUP</h1>
                    <form>
                        <input 
                            type="text"
                            name="username"
                            placeholder="username..."
                            value={this.state.details.username}
                            onChange={this.inputChange}
                        />
                        <input 
                            type="text"
                            name="email"
                            placeholder="email.."
                            value={this.state.details.email}
                            onChange={this.inputChange}
                        />
                        <input 
                            type="password"
                            name="password"
                            placeholder="password..."
                            value={this.state.details.password}
                            onChange={this.inputChange} 
                        />
                        <input 
                            type="password"
                            name="password2"
                            placeholder="confirm password..."
                            value={this.state.details.password2}
                            onChange={this.inputChange}
                        />
                        <button onClick={this.submit}>Submit</button>
                    </form>
                </div>
        )
    }
}

export default Signup