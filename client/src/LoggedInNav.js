import React from 'react';
import Search from './Search';
import { Grid, Row, Col, NavItem, Nav, Navbar } from 'react-bootstrap';

var LoggedInNav = function(props){
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img src="http://www.uniontools.com/lib/img/header/whats-happening.jpg" height="225" width="500"/></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <Grid>
          <br/>
          <br/>
            <Row className="show-grid">
              <Col md={4} xsOffset={6} mdPush={2}>
                <Search handleSearchQuery={props.handleSearchQuery} handleSearchClick={props.handleSearchClick} handleSearch={props.handleSearch}/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col md={4} xsOffset={0} mdPush={0}>
                <Navbar.Brand pullRight onClick={() => props.handleLogout()}>Logout</Navbar.Brand>
              </Col>
            </Row>
          </Grid>
        </Nav>
      </Navbar>
    </div>
  );
};


export default LoggedInNav;
