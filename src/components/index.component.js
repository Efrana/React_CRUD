// index.component.js

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {posts: []};
    }
    componentDidMount(){
      axios.get('http://localhost:3000/posts')
        .then(response => {
          this.setState({posts: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.posts.map(function(object, i){
          console.log('obj',object)
          console.log('key',i)
          return <TableRow obj={object} key={i} />;
          
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Post List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Body</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }