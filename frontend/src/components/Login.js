import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';
// import axios from 'axios';

class Login extends Component {

  constructor() {
    super();
    //Set default message
    this.state = {
      message: 'Loading...'
    }
  }
  componentDidMount() {
    //GET message from server using fetch api
    fetch('http://localhost:9000/api/login')
      .then(res => res.text())
      .then(res => this.setState({message: res}));
  }

  render() {
    return (
      <form>

        <p>{this.state.message}</p>
        <h3>Log in</h3>

        <div className="form-group">
            <label>Username</label>
            <input type="username" className="form-control" placeholder="Enter username" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>


        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
        <p className="register text-right">
            Register
        </p>
    </form>
    );
  }
}


export default Login;