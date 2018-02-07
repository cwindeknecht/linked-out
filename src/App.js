import React, { Component } from 'react';
import './App.css';
import './reset.css';
import Header from './components/header/header.js'

class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
