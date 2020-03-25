import React, { Component } from 'react';
import "../styles/Application.scss";
import "../styles/utilities.scss";
import Header from './Header';
import Body from './Body/Body';
import Footer from './Footer';

class Application extends Component{
    render(){
        return(
            <div>
                <div className="application u-block-center u-text-center">
                  <Header />
                  <Body />
                </div>
                <Footer />
            </div>
        )
    }
}
export default Application;