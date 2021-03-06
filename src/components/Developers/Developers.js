import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import PrivateRoute from 'components/shared/PrivateRoute';

// import MyDapps from './MyDapps';
// import SubmitDapp from './SubmitDapp';
import GettingStarted from './GettingStarted';

class Developers extends Component {
  render() {
    return (
      <Switch>
        <Route component={GettingStarted} path="/developers" />
      </Switch>
    );
  }
}

export default Developers;
