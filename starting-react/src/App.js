import React, { Component } from 'react';
import logo from './photo.jpg';
import './App.css';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Md: Mustafa Kamal Hossain</h1>
        </header>
        <p className="App-intro">
          <h3 className="degignation">Computer Engineer</h3>
          <h3 className="company">Cansoft Technologies Organization</h3>
          <h3 className="rank">Software Developer</h3>
        </p>
        <Navbar />
      </div>
    );
  }
}

export default App;
