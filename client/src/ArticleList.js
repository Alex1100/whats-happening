import React, { Component } from 'react';
import ArticleListEntry from './ArticleListEntry';
import { Badge, Jumbotron, Table, Grid, Row, Col, Form, ControlLabel, HelpBlock, FormControl, FormGroup, Image, Checkbox, Button, ButtonToolbar } from 'react-bootstrap/lib';


class ArticleList extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentUsersArticles: []
    };

    this.retrieveUsersArticles = this.retrieveUsersArticles.bind(this);
  }

  retrieveUsersArticles(){
    axios.get('/users/' + this.props.currentUser + '/articles')
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
    console.log("In the article list checking props: ", this.props.articles);

    return this.props.articles.length > 0 ? (
      <div>
        {this.props.articles.reverse().map((article) =>
          <ArticleListEntry article={article} />
        )}
      </div>
    ) :
    (
      <div>
        <Jumbotron>
          <h1>Hello <span>{this.props.currentUser}</span>, Search For Articles Above</h1>
        </Jumbotron>
      </div>
    );
  }
};


export default ArticleList;
