import React from 'react';
import { Badge, Jumbotron, Table, Grid, Row, Col, Form, ControlLabel, HelpBlock, FormControl, FormGroup, Image, Checkbox, Button, ButtonToolbar } from 'react-bootstrap/lib';



var ArticleListEntry = function(props){
  return (
    <div>
      <Jumbotron>
        <Table responsive>
          <thead>
            <tr>
              <th>Article Title</th>
              <th>Web URL</th>
              <th>Headline</th>
              <th>Topic</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.article.name}</td>
              <td><a href={props.article.webUrl} target="_blank">{props.article.webUrl}</a></td>
              <td>{props.article.sample}</td>
              <td>{props.article.generalCategory}</td>
              <td>{props.article.source}</td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
    </div>
  );
};


export default ArticleListEntry;
