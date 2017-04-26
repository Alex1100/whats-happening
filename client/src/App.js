import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import ArticleList from './ArticleList';
import SplashPage from './SplashPage';
import TheNav from './TheNav';
import LoggedInNav from './LoggedInNav';



class App extends Component {
  constructor(){
    super();
    this.state = {
      query: '',
      currentUser: '',
      usernameInputLogin: '',
      passwordInputLogin: '',
      usernameInputSignup: '',
      passwordInputSignup: '',
      loggedIn: false,
      allArticles: [],
      currentArticle: '',
      currentArticlesViews: ''
    };

    //pass down currentUser to articleList
    this.generateArticles = this.generateArticles.bind(this);
    this.retrieveArticles = this.retrieveArticles.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.signupUser = this.signupUser.bind(this);
    // this.incrementViewsCount = this.incrementViewsCount.bind(this);
    this.handleCurrentArticleClick = this.handleCurrentArticleClick.bind(this);
  }


  generateArticles(){
    axios.post('/articles/' + this.state.currentUser + '/' + this.state.query)
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
      console.log("Succesfully retireved Articles: ", articles.data);
      this.setState({
        allArticles: articles.data,
        currentArticle: this.state.allArticles[0]
      });
      console.log("In the resolve for get all alcs: ", this.state.allArticles);
    })
    .catch((error) => {
      console.log("Error Retrieving Users Articles: ", error);
    });
  }

  signupUser(){
    axios.post('/users/' + this.state.usernameInputSignup + '/' + this.state.passwordInputSignup)
    .then((user) => {
      console.log("User signed up to site: ", user);
      this.setState({
        currentUser: this.state.usernameInputSignup,
        loggedIn: !this.state.loggedIn
      });
    })
    .catch((error) => {
      console.log("Error signing user up: ", error);
    });
  }

  loginUser(){
    axios.get('/users/' + this.state.usernameInputLogin + '/' + this.state.passwordInputLogin)
    .then((user) => {
      console.log("User successfuly logged in: ", user.data);
      this.setState({
        loggedIn: !this.state.loggedIn,
        currentUser: user.data.username
      });
    })
    .catch((error) => {
      console.log("Error logging guest in: ", error);
    });
  }


  handleUsernameInputLogin(username){
    this.setState({usernameInputLogin: username});
  }

  handlePasswordInputLogin(password){
    this.setState({passwordInputLogin: password});
  }

  handleUsernameInputSignup(username){
    this.setState({usernameInputSignup: username});
  }

  handlePasswordInputSignup(password){
    this.setState({passwordInputSignup: password});
  }

  // incrementViewsCount(){
  //   console.log('what is this? ', this.state.currentArticle)
  //   axios.put('/articles/' + this.state.currentArticle.name + '/' + this.state.currentArticlesViews)
  //     .then((article) => {
  //       console.log("In the resolve portion: ", article);
  //       this.setState({
  //         currentArticlesViews: article.views
  //       });
  //     })
  //     .catch((error) => {
  //       console.log('Error updating count for articles views: ', error);
  //     })
  // }

  handleSignupClick(e){
    e.preventDefault();
    this.signupUser();
  }

  handleLoginClick(e){
    e.preventDefault();
    this.loginUser();
  }

  handleCurrentArticleClick(article){
    //if there is an error without e.preventDefault then use it
    console.log('what this article here? ', article.name)
    console.log('what this something else here? ', article)
    console.log('the current state ', this.state)
    this.setState({
      currentArticlesViews: article.views,
      currentArticle: article
    })
    // ()=>{this.incrementViewsCount()})
    // .then((data) => {
    //   console.log("After state set: ", this.state);
      // this.incrementViewsCount();
    // })
    // .catch((error) => {
    //   console.log("Got the gnarly erro: ", error);
    // })
  }

  handleLogout(){
    this.setState({
      loggedIn: !this.state.loggedIn,
      currentUser: ''
    });
  }

  handleSearchQuery(term){
    this.setState({query: term});
  }

  handleSearch(){
    this.generateArticles();
  }

  handleSearchClick(e){
    e.preventDefault();
    this.retrieveArticles();
  }


  render(){
    return this.state.loggedIn === false ? (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} xsOffset={0}>
              <TheNav
              handleUsernameInputLogin={this.handleUsernameInputLogin.bind(this)}
              handlePasswordInputLogin={this.handlePasswordInputLogin.bind(this)}
              handleUsernameInputSignup={this.handleUsernameInputSignup.bind(this)}
              handlePasswordInputSignup={this.handlePasswordInputSignup.bind(this)}
              handleLoginClick={this.handleLoginClick.bind(this)}
              handleSignupClick={this.handleSignupClick.bind(this)}/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} xsOffset={0} mdPush={0}>
              <SplashPage />
            </Col>
          </Row>
        </Grid>
      </div>
    ) :
    (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} xsOffset={0}>
              <LoggedInNav
              handleSearchQuery={this.handleSearchQuery.bind(this)}
              handleSearchClick={this.handleSearchClick.bind(this)}
              handleSearch={this.handleSearch.bind(this)}
              term={this.state.term}
              handleLogout={this.handleLogout.bind(this)}/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12} xsOffset={0} mdPush={0}>
              <ArticleList
              handleCurrentArticleClick={this.handleCurrentArticleClick.bind(this)}
              articles={this.state.allArticles}
              currentUser={this.state.currentUser}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};


export default App;
