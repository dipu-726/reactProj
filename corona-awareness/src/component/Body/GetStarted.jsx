import React, { Component } from 'react';
import getStartedButton from "../../images/getStarted.png";
class GetStarted extends Component{
   
    handleClick = () =>{
        this.props.handleStartClick();
    }

    render(){
        return(
            <img height='50px' width="60%" src={getStartedButton} alt="" onClick={this.handleClick}/>
        )
    }
}
export default GetStarted;