import React from 'react';
import { NavItem, Nav, Navbar, Header, Form, ControlLabel, HelpBlock, FormControl, FormGroup, Button, ButtonToolbar } from 'react-bootstrap';

var TheNav = function(props){
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img src="http://www.uniontools.com/lib/img/header/whats-happening.jpg" height="75" width="500"/></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <Navbar.Collapse bsSize="small">
            <br/>
            <br/>
            <br/>
            <Navbar.Form pullRight bsSize="small">
              <FormGroup bsSize="small">
                <FormControl onChange={(e) => props.handleUsernameInputLogin(e.target.value)} type="text" placeholder="Enter Username" bsSize="small"/>
                <FormControl onChange={(e) => props.handlePasswordInputLogin(e.target.value)} type="text" placeholder="Enter Password" bsSize="small"/>
              </FormGroup>
              {' '}
              <Button onClick={(e) => props.handleLoginClick(e)} type="submit" bsSize="small">Login</Button>
            </Navbar.Form>
          </Navbar.Collapse>
          <Navbar.Collapse bsSize="small">
            <Navbar.Form pullRight bsSize="small">
              <FormGroup bsSize="small">
                <FormControl onChange={(e) => props.handleUsernameInputSignup(e.target.value)} type="text" placeholder="Create Username" bsSize="small"/>
                <FormControl onChange={(e) => props.handlePasswordInputSignup(e.target.value)} type="text" placeholder="Create Password" bsSize="small"/>
              </FormGroup>
              {' '}
              <Button onClick={(e) => props.handleSignupClick(e)} type="submit" bsSize="small">Signup</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </div>
  );
};


export default TheNav;
