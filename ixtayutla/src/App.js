import React, { Component } from 'react';
//react is being disctructured and we are importing component
import logo from './logo.svg';
//importing file
import './App.css';
//extend component that comes with react
//rule that we must always render something
//App becomes a child of Component because it extends from it
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
