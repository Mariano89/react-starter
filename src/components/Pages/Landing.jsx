import React, { Component } from 'react';

import logo from '../../images/logo.svg';

class Landing extends Component {
  render() {
    return(
      <div className="content-landing">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    )
  }
}

export default Landing;