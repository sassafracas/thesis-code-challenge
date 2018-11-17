import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class TopNavbar extends Component {

  render(){
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">My Web Now</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight }>
            <NavItem eventKey={1} href="#home">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#why">
              Why Us
            </NavItem>
            <NavItem eventKey={3} href="#contact">
              Contact Us
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#login">
              Login
            </NavItem>
            <NavItem eventKey={2} href="#support">
              Support
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TopNavbar;
