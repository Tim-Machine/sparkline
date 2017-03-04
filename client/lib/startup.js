import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../components/Router.jsx';

Meteor.startup(() => {
  Accounts.config({
    sendVerificationEmail: true,
    forbidClientAccountCreation: false
  });

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    loginPath: '/',
  });
  
  
  render(renderRoutes(), document.getElementById('app'));


});