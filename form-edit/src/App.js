import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class FormTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yourname',
      tname: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      tname: event.target.value
    });
  }

  handleSubmit(event) {
    this.setState({
      name: this.state.tname
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <div id="thisForm" class="form-wrapper fit">
          <form name="myForm" onSubmit={this.handleSubmit}>
            <input type="text" name="fname" onChange={this.handleNameChange} />
            <input type="submit" value="Edit" />
          </form>
        </div>
      </div>
    )
  }
}


export default FormTest;
