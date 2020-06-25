// create.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      body: '',
      
    }
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeBody(e) {
    this.setState({
      body: e.target.value
    })  
  }


  onSubmit(e) {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      body: this.state.body
    };
    axios.post('http://localhost:3000/posts', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      title: '',
      body: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>Body </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.body}
                      onChange={this.onChangeBody}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Post" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}