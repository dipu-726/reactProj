import React, { Component } from 'react';
import "../styles/Application.scss";
import "../styles/utilities.scss";
import Header from './Header';
import Body from './Body/Body';

class Application extends Component{
    render(){
        return(
            <div className="application u-block-center u-text-center">
                <Header />
                <Body />
            </div>
        )
    }
}
export default Application;