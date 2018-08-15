import React, { Component } from 'react';

import logo from '../../images/logo.svg';
import Nav from './Nav';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <div className="nav-bar container">
          <a href="/">
            <img src={logo} className="app-logo" />
          </a>
          <Nav appState={this.props.appState} />
        </div>
      </div>
    )
  }
}

export default Header;