import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/shared/PrivateRoute';
import PublicRoute from 'components/shared/PublicRoute';

import Header from 'components/Header';
import App from 'components/App';
import Login from 'components/Login';
import Signup from 'components/Signup';
import Onboarding from 'components/Onboarding';

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Switch>
            <Route path="/" component={App} exact />
            <PublicRoute path="/login" component={Login} exact />
            <PublicRoute path="/signup" component={Signup} exact />
            <PrivateRoute path="/onboarding" component={Onboarding} exact />
          </Switch>
        </div>
      </Router>
    </PersistGate>
  </Provider>
);

export default Root;
