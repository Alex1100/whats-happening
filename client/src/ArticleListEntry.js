import React, { Component } from 'react';
import { Badge, ListGroup, ListGroupItem, Jumbotron, Table, Grid, Row, Col, Form, ControlLabel, HelpBlock, FormControl, FormGroup, Image, Checkbox, Button, ButtonToolbar } from 'react-bootstrap/lib';
import FontAwesome from 'react-fontawesome';


var ArticleListEntry = function(props) {

    return (
      <div>
        <Jumbotron>
          <ListGroup>
            <ListGroupItem header={props.article.name}><div><Badge>{props.article.views}  <FontAwesome name="eye"/></Badge></div>{props.article.sample}</ListGroupItem>
            <Table responsive>
              <thead>
                <tr>
                  <th>Web URL</th>
                  <th>Topic</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href={props.article.webUrl} target="_blank">{props.article.webUrl}</a></td>
                  <td>{props.article.generalCategory}</td>
                  <td>{props.article.source}</td>
                </tr>
              </tbody>
            </Table>
          </ListGroup>
        </Jumbotron>
      </div>
    );
};


export default ArticleListEntry;
