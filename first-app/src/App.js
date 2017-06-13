import React, { Component } from 'react';
import Navbar from './Navbar';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <h3> Hello World </h3>
      </div>
    );
  }
}

export default App;
