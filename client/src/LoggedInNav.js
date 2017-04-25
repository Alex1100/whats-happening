import React from 'react';
import Search from './Search';
import { NavItem, NavDropdown, MenuItem, Navbar, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

var LoggedInNav = function(){
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">What's Happening</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/logout">Logout</NavItem>
          <NavItem eventKey={2} href="#">Favorited Articles</NavItem>
          <Search />
        </Nav>
      </Navbar>
    </div>
  );
};


export default LoggedInNav;
