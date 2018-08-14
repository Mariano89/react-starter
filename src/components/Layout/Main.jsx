import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Test from '../Pages/Test';

class Main extends Component {
  render() {
    return(
      <div className="content">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Landing appState={this.props.appState} />
            )}
          />
          <Route
            exact
            path="/test"
            render={() => (
              <Test setPage={this.props.setPage} appState={this.props.appState} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default Main;