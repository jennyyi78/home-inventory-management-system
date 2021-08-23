import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from './components/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Register from './components/Register';
import Inventory from './components/Inventory';
import UserPage from './components/UserPage';

class App extends Component {
  

  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
    this.updateAuth = this.updateAuth.bind(this);
  }

componentDidMount() {
  axios.get('http://localhost:9000/api/isloggedin', { withCredentials: true }).then((res) => {
    console.log(res.data)
    this.setState({ loggedIn: res.data})
  })
}

updateAuth(data) {
  this.setState({ loggedIn: data})
}


  render() {
    const {loggedIn} = this.state

    return (
      <Router>
        <div>
        <Switch>
        <PrivateRoute path='/inventory' component={Inventory} authed={loggedIn}/>
        <PrivateRoute path='/user' component={UserPage} authed={loggedIn} />
        <Route exact path="/">{ <Redirect to="/login"/>}</Route>
        <Route path='/login' render={routeProps => <Login handleCallback={this.updateAuth} {...routeProps} />}/>
        <Route path='/register' component={Register} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;