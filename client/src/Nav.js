import React from 'react';
import { NavItem, NavDropdown, MenuItem, Navbar, Grid, Row, Col, Form, ControlLabel, HelpBlock, FormControl, FormGroup, Image, Checkbox, Button, ButtonToolbar } from 'react-bootstrap/lib';

var Nav = function(props){
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">What's Happening</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        <Navbar.Collapse bsSize="small">
          <Navbar.Form pullRight bsSize="small">
            <FormGroup bsSize="small">
              <FormControl type="text" placeholder="Enter Username" bsSize="small"/>
              <FormControl type="text" placeholder="Enter Password" bsSize="small"/>
            </FormGroup>
            {' '}
            <Button onClick={() => props.handleLoginClick()} type="submit" bsSize="small">Login</Button>
          </Navbar.Form>
        </Navbar.Collapse>
        <Navbar.Collapse bsSize="small">
          <Navbar.Form pullRight bsSize="small">
            <FormGroup bsSize="small">
              <FormControl type="text" placeholder="Create Username" bsSize="small"/>
              <FormControl type="text" placeholder="Create Password" bsSize="small"/>
            </FormGroup>
            {' '}
            <Button onClick={() => props.handleSignupClick()} type="submit" bsSize="small">Signup</Button>
          </Navbar.Form>
        </Navbar.Collapse>
        </Nav>
      </Navbar>
    </div>
  );
};


export default Nav;
