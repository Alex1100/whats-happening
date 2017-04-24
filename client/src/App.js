import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      allArticles: [],
      currentArticle: ''
    };
  }

  componentDidMount(){

  }


  handleSubmit(){

  }

  render(){
    return(
      <div>
        <p>In the App Component</p>
      </div>
    );
  }


};


export default App;
