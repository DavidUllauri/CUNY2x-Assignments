import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 4,
      show: true
    };
  }

  Decrement = () => {
    if ((this.state.number - 1) < 0){
      alert("cant go below 0");
    }
    else {
      this.setState({ number: this.state.number - 1 });
    }

  }

  render() {
    return (
      <div>
        { this.state.show ? <h2>{ this.state.number }</h2> : '' }
        <button onClick={this.Decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
