import React, { Component } from 'react';
import Details from './Details';
import Survey from './Survey';
class RenderDetailsORQuestions extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            showDetails : true
        }
    }

    handleContinueClick = () =>{
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render(){
        return(
            <div>
                {this.state.showDetails ? <Details  handleContinueClick={this.handleContinueClick}/> : <Survey />}
            </div>
        )
    }
}
export default RenderDetailsORQuestions;