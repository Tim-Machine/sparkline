import React from 'react';
import LandingPageNav from './nav_components/landing_page_nav.jsx';

export default class AppContainer extends React.Component{

    render(){
        console.log(this.props);
        return(
            <div>
                <LandingPageNav/>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
} 