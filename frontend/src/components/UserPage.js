import React, { Component } from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar'

class UserPage extends Component {

    constructor(props) {
        super(props)
    
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
    


    render() {
        const {username, date} = this.state
        return (
            <div>
            <NavigationBar/>
                <p>Hi {username}</p>
                <p>Account created on {date}</p>
            </div>
        )
    }

}

export default UserPage;