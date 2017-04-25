import React from 'react';
import { Navbar, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

var Search = function(){
  return (
    <div>
      <Navbar.Collapse bsSize="large">
        <Navbar.Form pullRight bsSize="large">
          <FormGroup bsSize="large">
            <FormControl type="text" placeholder="Discover Yesterdays Hottest Issues... Today" bsSize="large"/>
          </FormGroup>
          {' '}
          <Button type="submit" bsSize="large">Go</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </div>
  );
};


export default Search;
