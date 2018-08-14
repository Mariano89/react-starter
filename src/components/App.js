import React, { Component } from 'react';

import Main from './Layout/Main';
import '../styles/css/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main setPage={this.setPage} appState={this.state} />
      </div>
    );
  }
}

export default App;
