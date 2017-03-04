import React from 'react';
import { Accounts } from 'meteor/std:accounts-ui';
import Login from './Login.jsx';
import { Navbar, Nav, FormGroup, FormControl, Button} from 'react-bootstrap';

export default LandingPageNav = () => (
    <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">SparkLine</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form >
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Navbar.Form>

      <Login/>
    </Navbar.Collapse>
  </Navbar>
);