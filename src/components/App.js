import React, { Component } from 'react';

import Header from './Layout/Header';
import Main from './Layout/Main';
import '../styles/css/main.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header appState={this.state} />
        <Main setPage={this.setPage} appState={this.state} />
      </div>
    );
  }
}

export default App;
