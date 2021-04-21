import React,{Component} from 'react';

const initialState = {
    nameError: '',
    emailError: '',
    passwordError: '',
    password2Error: ''
}

class Signup extends Component{

    state = {
        details: {
            username: '',
            email: '',
            password: '',
            password2: ''
        },
        initialState
    }

    validate = () => {
        let emailError = '';
        let nameError = '';
        let passwordError = '';
        let password2Error = '';

        if (!this.state.details.password2){
            password2Error = 'cannot be blank';
        }

        if (this.state.details.password !== this.state.details.password2){
            passwordError = 'passwords do not match'
        }

        if (!this.state.details.password){
            passwordError = 'cannot be blank';
        }

        if (!this.state.details.username){
            nameError = 'cannot be blank';
        }

        if (!this.state.details.email.includes('@')) {
            emailError = 'invalid email address enter valid';
        }

        if (!this.state.details.email){
            emailError = 'cannot be blank';
        }

        if (emailError || nameError || passwordError || password2Error ) {
            this.setState({emailError, nameError, passwordError, password2Error});
            return false;
        }
        return true;
    };

    submit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state.details);
            this.setState(initialState);
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
    };

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
                        <div className="error">
                            <h5>{this.state.nameError}</h5>
                        </div>
                        <input 
                            type="text"
                            name="email"
                            placeholder="email.."
                            value={this.state.details.email}
                            onChange={this.inputChange}
                        />
                        <div className="error">
                            <h5>{this.state.emailError}</h5>
                        </div>
                        <input 
                            type="password"
                            name="password"
                            placeholder="password..."
                            value={this.state.details.password}
                            onChange={this.inputChange} 
                        />
                        <div className="error">
                            <h5>{this.state.passwordError}</h5>
                        </div>
                        <input 
                            type="password"
                            name="password2"
                            placeholder="confirm password..."
                            value={this.state.details.password2}
                            onChange={this.inputChange}
                        />
                        <div className="error">
                            <h5>{this.state.passwordError}</h5>
                        </div>
                        <button onClick={this.submit}>Submit</button>
                    </form>
                </div>
        )
    }
}

export default Signup