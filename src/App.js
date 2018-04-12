import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MVP from './containers/mvp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DogTinder</h1>
        </header>
        <div className="AppBox">
          <MVP />
        </div>
      </div>
    );
  }
}

export default App;
