import React from 'react';
import { Navbar, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

var Search = function(props){
  return (
    <div>
      <Navbar.Collapse bsSize="large">
      <br/>
      <br/>
        <Navbar.Form pullRight bsSize="large">
          <FormGroup bsSize="large">
            <FormControl onChange={(e) => {props.handleSearch(e.target.value); props.handleSearchQuery(e.target.value)}} type="text" placeholder="Got anything in mind?" bsSize="large"/>
          </FormGroup>
          {' '}
          <Button bsStyle="success" onClick={(e) => props.handleSearchClick(e)}  type="submit" bsSize="large">Search</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </div>
  );
};


export default Search;
