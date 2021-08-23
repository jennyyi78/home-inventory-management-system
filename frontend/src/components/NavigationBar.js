import React, { Component } from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class NavigationBar extends Component {

  constructor(props) {
    super(props)

    this.logOutUser = this.logOutUser.bind(this);

    this.state = {
        username: '',
    }

}

  componentDidMount() {
   axios.get('http://localhost:9000/api/user', { withCredentials: true }).then((res) => {
    this.setState({ username: res.data.username})
})
}

  redirect() {
    this.props.history.push('/login')
  }

logOutUser() {
    axios.get('http://localhost:9000/api/logout', { withCredentials: true }).then((res) => {
    this.setState({ username: ''})
})
    this.redirect();
}

  render() {
    const {username} = this.state;
    return (
    <Navbar>
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={NavLink} to='/inventory'>Inventory</Nav.Link>
      </Nav>
      </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
        <Nav>
        <Navbar.Text>
        Signed in as: <Link to='/user'>{username}</Link>
      </Navbar.Text>
      <Nav.Link eventKey={2} onClick={this.logOutUser} as={NavLink} to='/login' >
            Log Out
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        );
    }
}

export default withRouter(NavigationBar);