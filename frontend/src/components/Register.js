import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Register extends Component {

    // constructor() {
    //     super();
    //     //Set default message
    //     this.state = {
    //       message: 'Loading...'
    //     }
    //   }
    //   componentDidMount() {
    //     //GET message from server using fetch api
    //     fetch('http://localhost:9000/api/register')
    //       .then(res => res.text())
    //       .then(res => this.setState({message: res}));
    //   }

    constructor(props) {
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
        }
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    redirect() {
        this.props.history.push('/login')
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post('http://localhost:9000/api/register', user)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error.message)
            });
        
        this.redirect()
        this.setState({ username: '', password: ''})
    }

    render() {

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.onChangeUsername}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.onChangePassword}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" value="Create User">Register</button>
                <Link className="login text-right" to='/login'>
                    Already have an account? Login
                </Link>
            </form>
            </div>
            
        );
    }
}