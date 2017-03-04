import React from 'react';
import ReactDOM from 'react-dom';
import { Accounts, STATES } from 'meteor/std:accounts-ui';


export default class Register extends React.Component{
    render() {
        return(
            <Accounts.ui.LoginForm formState={STATES.SIGN_UP} />
        );
    }
}