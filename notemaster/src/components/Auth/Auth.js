import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Auth.css'

class Auth extends Component {
    state = {
        authenticated: false,
        uName: 'Travis',
        uPass: 'Password',
        username: '',
        password: '',
        attempted: false
    };

    inputChangeHandler = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    };

    checkAuthorization = e => {
        e.preventDefault();
        if (
            this.state.username === this.state.uName &&
            this.state.password === this.state.uPass
        ) {
            this.setState({
                attempted: true
            });
        }
        this.setState({
            attempted: true
        });
    };

    addNewUser = event => {
        this.setState({
            uName: this.state.username,
            uPass: this.state.password
        });
        this.checkAuthorization(event);
    };

    render() {
        if (this.state.authenticated) {
            return <Redirect to="/notes" />
        }
        return (
            <div>
                <h1>Auth Component</h1>
                <form onSubmit={this.checkAuthorization}>
                    <div>
                        <input
                        onChange={this.inputChangeHandler}
                        placeholder='User Name'
                        value={this.state.username}
                        name='username'
                    />
                    </div>
                    <div>
                        <input
                            onChange={this.inputChangeHandler}
                            placeholder='Password'
                            value={this.state.password}
                            name='password'
                            type='password'
                        />
                    </div>
                    <div className={this.state.attempted ? null : 'hidden'}>
                        <h4 className='hidden--text'>
                            Uh oh, looks like that information is wrong. Would you like to create a new account?
                        </h4>
                    </div>
                    <button>Log In</button>
                </form>
                <button onClick={this.addNewUser}>Create New Account</button>
            </div>
        );
    }
}

export default Auth;
