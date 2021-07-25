import React, { Component } from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar'

class Inventory extends Component {

    constructor(props) {
        super(props)

        this.logOutUser = this.logOutUser.bind(this);
    
        this.state = {
            username: '',
            date: ''
        }
    
    }

     componentDidMount() {
      axios.get('http://localhost:9000/api/user', { withCredentials: true }).then((res) => {
        console.log(res.data)
        this.setState({ username: res.data.username, date: res.data.date })
    })
    }

    redirect() {
        this.props.history.push('/login')
      }

    logOutUser() {
        axios.get('http://localhost:9000/api/logout', { withCredentials: true }).then((res) => {
        this.setState({ username: '', date: ''})
    })
    this.redirect();
    }

    render() {
        const {username, date} = this.state
        return (
            <div>
            <NavigationBar/>
                <p>Hi {username}, {date}</p>
            </div>
        )
    }

}

export default Inventory;