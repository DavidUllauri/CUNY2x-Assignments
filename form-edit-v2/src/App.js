import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {isEditing: false};
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <h1>hello</h1>

        </div>
      )
    } else {
      <div>
        <h1>hello1</h1>

      </div>
    }


  }
}

export default App;
