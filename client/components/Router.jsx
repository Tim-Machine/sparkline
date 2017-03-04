import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from './AppContainer.jsx';
import Register from './user/Register.jsx';
import AddEvent from './events/AddEvent.jsx'

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path='register' component={Register} />
      <Route path='event/add' component={AddEvent} />
      {/*<Route path="lists/:id" component={ListPageContainer}/>*/} 
    </Route>
  </Router>
);
