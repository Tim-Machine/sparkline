import React from 'react';
import { Meteor } from 'meteor/meteor';
import {browserHistory} from 'react-router';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
var DatePicker = require("react-bootstrap-date-picker");

export default class AddEvent extends React.Component{
    constructor(){
        super();
        this.state ={
            eventType: '',
            occuranceDate: new Date().toISOString(),
            details: ''
        }
        this.setEventTypeState = this.setEventTypeState.bind(this);
        this.setDateState = this.setDateState.bind(this);
        this.setDetailState = this.setDetailState.bind(this);
    }

    setEventTypeState(e){
        this.setState({
            eventType: e.target.value
        })
    }

    setDateState(date){
        this.setState({
            occuranceDate: date
        })
    }
    setDetailState(e){
        this.setState({
            details: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form>
                    <FormGroup>
                        <ControlLabel>Event Type</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" onChange={this.setEventTypeState}>
                            <option value="">Select an Event</option>
                            <option value="award">Award</option>
                            <option value="project event">Project Event</option>
                            <option value="career">Career</option>
                        </FormControl>
                        <ControlLabel>Occurance Date</ControlLabel>
                        <DatePicker id="example-datepicker" 
                            value={this.state.occuranceDate} 
                            onChange={this.setDateState} />
                        <ControlLabel>Details</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.details}
                            placeholder="Tell us about the event"
                            onChange={this.setDetailState}
                        />
                    </FormGroup>
                </form>
            </div>
        )
    }
}