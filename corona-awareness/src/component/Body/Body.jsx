import React, { Component } from 'react';
import Details from './Details';
import GetStarted from './GetStarted';
class Body extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            showDetails : true
        }
    }

    handleStartClick = () =>{
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render(){
        return(
          <div>
                {this.state.showDetails ? <GetStarted handleStartClick = {this.handleStartClick}/> : <Details />}
          </div>
        )
    }
}
export default Body;