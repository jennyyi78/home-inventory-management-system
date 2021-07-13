import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';

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
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;