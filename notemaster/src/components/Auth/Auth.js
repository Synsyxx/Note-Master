import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Auth.css";

class Auth extends Component {
  render() {
    if (this.props.state.authenticated) {
      return <Redirect to="/notes" />;
    }
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.props.checkAuthorization}>
          <div>
            <input
              onChange={this.props.inputChangeHandler}
              placeholder="User Name"
              value={this.props.state.username}
              name="username"
            />
          </div>
          <div>
            <input
              onChange={this.props.inputChangeHandler}
              placeholder="Password"
              value={this.props.state.password}
              name="password"
              type="password"
            />
          </div>
          <div className={this.props.state.attempted ? null : "hidden"}>
            <h4 className="hidden--text">
              Did you forget your password? Or would you like to make a new account?
            </h4>
          </div>
          <button>Log In</button>
        </form>
        <button onClick={this.props.addNewUser}>Create New user</button>
      </div>
    );
  }
}
export default Auth;
