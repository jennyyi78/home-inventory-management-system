import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

class App extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
//   }

// callAPI() {
//     fetch("http://localhost:9000/")
//         .then(res => res.text())
//         .then(res => this.setState({ apiResponse: res }));
// }

// componentWillMount() {
//     this.callAPI();
// }

  render() {
    return (
      <Router>
        <div>
        {/* <p>{this.state.apiResponse}</p> */}
        <Switch>
          <Route exact path="/">{ <Redirect to="/login"/>}</Route>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/home' component={Home} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;