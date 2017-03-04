import React from 'react';
import ReactDom from 'react-dom';
import {browserHistory} from 'react-router';
import { Accounts } from 'meteor/std:accounts-ui';
import { Meteor } from 'meteor/meteor'
import { Button, Modal, DropdownButton, MenuItem } from 'react-bootstrap';

//<Accounts.ui.LoginForm />

export default class Login extends React.Component{
    constructor(props){
        super();
        this.state = {
            showModal: false,
            userLoggedIn: false
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.getButton = this.getButton.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
        this.logout = this.logout.bind(this);

    }

    componentDidMount(){
        console.log('test')
        let user =  Meteor.userId();
        console.log(user)
        this.setState({
            userLoggedIn: user
        });
    }

    toggleModal() {
      this.setState({showModal: !this.state.showModal})
    }

    loggedIn(){
        console.log('loggedin')
        this.setState({userLoggedIn:true})
        this.toggleModal();
    }
    
    //sends user to profile page
    goToProfile(){
       browserHistory.push('/profile')
    }

    // log users out of the sytem
    logout(){
        Meteor.logout();
        this.setState({userLoggedIn: false}); // sets button back to orginal state
    }


    getButton(){
        if(!this.state.userLoggedIn){
            return(
                <Button onClick={this.toggleModal}>Login</Button>
            )
        }else{
            return(
                <DropdownButton bsStyle="primary" title="Actions" id="primaryActions">
                    <MenuItem eventKey="1" >Create Event</MenuItem>
                    <MenuItem eventKey="1" >Edit Profile</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="1" onClick={this.logout} >Logout</MenuItem>
                </DropdownButton>
            )
        }
    }

    render(){
        return (
            <div>
               {this.getButton()}
               <Modal show={this.state.showModal} onHide={this.toggleModal}>
                   <Modal.Header closeButton>Login or Register</Modal.Header>
                   <Modal.Body>
                       <Accounts.ui.LoginForm onSignedInHook={this.loggedIn} />
                   </Modal.Body>
               </Modal>
            </div>
        )
    }
}