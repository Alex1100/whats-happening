import React, { Component } from 'react';
import App from './App';
import { Jumbotron } from 'react-bootstrap';


var SplashPage = function(props){
  return(
    <div>
      <Jumbotron>
        <h1>Welcome, Login Or Signup and let us tell you what's happening!</h1>
        <hr/>
        <Jumbotron>
          <h2>What's Happening is made for users and guests to search through a databse of articles to discover current, past, and trending information.</h2>
        </Jumbotron>
      </Jumbotron>
    </div>
  );
};


export default SplashPage;
