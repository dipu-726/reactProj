import React, { Component } from 'react';
import GetStarted from './GetStarted';
import RenderDetailsORQuestions from './RenderDetailsORQuestions';
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
                {this.state.showDetails ? <GetStarted handleStartClick = {this.handleStartClick}/> : <RenderDetailsORQuestions />}
          </div>
        )
    }
}
export default Body;