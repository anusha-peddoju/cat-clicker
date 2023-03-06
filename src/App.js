import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './index.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
