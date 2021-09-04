import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

const initialState = {
    nameError: '',
    passwordError: ''
}

class Login extends Component{

    state = {
        credentials:{
            username: '',
            password: ''
        },
        initialState
    }

    validate = () => {
        let nameError = '';
        let passwordError = '';

        if(this.state.credentials.username.includes('*')){
            nameError = 'enter valid name'
        }

        if (!this.state.credentials.username){
            nameError = 'cannot be blank';
        }

        if (!this.state.credentials.password){
            passwordError = 'cannot be blank';
        }

        if (nameError || passwordError){
            this.setState({nameError, passwordError});
            return false;
        }
        return true;
    };

    login = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state.credentials);
            this.setState(initialState);
            fetch('http://127.0.0.1:8000/token',{
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(this.state.credentials)
            }).then(
                res => {
                    console.log(res);
                    res.json().then(data => {
                        console.log(data)
                        if (data.token){
                            localStorage.setItem('token', data.token)
                            return <Redirect to ="/about"  />
                        }
                        if(!data.token){
                            localStorage.setItem('token', data.error)
                        }
                    });
                }
            ).catch( error => console.log(error))
        }
    };

    inputChange = (event) => {
        const credential = this.state.credentials;
        credential[event.target.name] = event.target.value;
        this.setState({credentials : credential});
    }

    render(){
        return(
            <div className="login" >
            <h2>Login</h2>
            <form>
                <input 
                type="text"
                name="username"
                placeholder="username..."
                value={this.state.credentials.username}
                onChange={this.inputChange}
                />
                <div className="error">
                    <h5>{this.state.nameError}</h5>
                </div>
                <input 
                type="password"
                name="password"
                placeholder="password..."
                value={this.state.credentials.password}
                onChange={this.inputChange}
                />
                <div className="error">
                    <h5>{this.state.passwordError}</h5>
                </div>
                <input 
                type="submit"
                value="Login"
                className="btn"
                onClick={this.login}
                />
            </form>
        </div>
        )
    }
}

export default Login;