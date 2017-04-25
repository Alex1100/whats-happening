import React, { Component } from 'react';
import { Grid, Row, Col, Form, ControlLabel, HelpBlock, FormControl, FormGroup, Image, Checkbox, Button, ButtonToolbar } from 'react-bootstrap/lib';
import axios from 'axios';
import SplashPage from './SplashPage';
import Nav from './Nav';
import LoggedInNav from './LoggedInNav';
import ArticleList from './ArticleList';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      allArticles: [],
      currentArticle: '',
      currentUser: '',
      currentUsersArticles: [],
      loggedIn: false
    };

    this.loginUser = this.loginUser.bind(this);
    this.signupUser = this.signupUser.bind(this);
    this.generateArticles = this.generateArticles.bind(this);
    this.retrieveArticles = this.retrieveArticles.bind(this);
    this.retrieveUsersArticles = this.retrieveUsersArticles.bind(this);
  }


  handleLoginClick(user){
    user.preventDefault();
    this.loginUser();
    this.setState({currentUser: user});
  }

  handleSignupClick(){
    user.preventDefault();
    this.signupUser();
  }

  signupUser(){
    axios.post('/users')
    .then((user) => {
      console.log("User signed up to site: ", user);
      this.setState({
        currentUser: user.data.username
      });
    })
    .catch((error) => {
      console.log("Error signing user up: ", error);
    });
  }

  loginUser(){
    axios.get('/users/' + currentUser)
    .then((user) => {
      console.log("User successfuly logged in: ", user);
      this.setState({
        loggedIn: !this.state.loggedIn
      });
    })
    .catch((error) => {
      console.log("Error logging guest in: ", error);
    });
  }

  generateArticles(){
    axios.post('/articles/' + currentUser)
    .then((articles) => {
      console.log("Generated Articles Successfully: ", articles);
    })
    .catch((error) => {
      console.log("Error generating articles because: ", error);
    });
  }


  retrieveArticles(){
    axios.get('/articles')
    .then((articles) => {
      console.log("Succesfully retireved Articles: ", articles);
      this.setState({
        allArticles: articles.data,
        currentArticle: this.state.allArticles[0]
      });
    })
    .catch((error) => {
      console.log("Error Retrieving Users Articles: ", error);
    });
  }

  retrieveUsersArticles(){
    axios.get('/users/' + this.state.currentUser + '/articles')
    .then((usersArticles) => {
      console.log("Succesfully Retrieved Users Articles: ", usersArticles);
      this.setState({
        currentUsersArticles: usersArticles.data
      });
    })
    .catch((error) => {
      console.log("Error retrieving users articles: ", error);
    });
  }


  render(){
    return this.state.loggedIn === false ? (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} xsOffset={0}><Nav handleLoginClick={this.handleLoginClick.bind(this)} handleSignupClick={this.handleSignupClick.bind(this)}/></Col>
          </Row>
          <Row className="show-grid">
            <Col md={12} xsOffset={0} mdPush={0}><SplashPage /></Col>
          </Row>
        </Grid>
      </div>
    ) :
    (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} xsOffset={0}><LoggedInNav /></Col>
          </Row>
          <Row className="show-grid">
            <Col md={12} xsOffset={0} mdPush={0}><ArticleList /></Col>
          </Row>
        </Grid>
      </div>
    );
  }
};


export default App;
